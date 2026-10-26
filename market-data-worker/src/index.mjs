const SITE_ORIGIN = "https://jeremytantat.github.io";
const CACHE_SECONDS = 900;

const CHARTS = Object.freeze({
  "us-vti": { symbol: "VTI", micCode: "ARCX" },
  "us-ko": { symbol: "KO", micCode: "XNYS" },
  "us-msft": { symbol: "MSFT", micCode: "XNAS" },
  "us-nvda": { symbol: "NVDA", micCode: "XNAS" },
  "cn-600519": { symbol: "600519", micCode: "XSHG" },
  "cn-601318": { symbol: "601318", micCode: "XSHG" },
  "cn-baba-us": { symbol: "BABA", micCode: "XNYS" },
  "hk-0700": { symbol: "0700", micCode: "XHKG" },
  "hk-0005": { symbol: "0005", micCode: "XHKG" },
  "hk-9988": { symbol: "9988", micCode: "XHKG" },
  "sg-d05": { symbol: "D05", micCode: "XSES" },
  "sg-c38u": { symbol: "C38U", micCode: "XSES" },
  "sg-o39": { symbol: "O39", micCode: "XSES" },
  "my-1155": { symbol: "1155", micCode: "XKLS" },
  "my-1295": { symbol: "1295", micCode: "XKLS" },
  "my-5183": { symbol: "5183", micCode: "XKLS" }
});

function jsonResponse(body, status, cacheControl = "no-store") {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Access-Control-Allow-Origin": SITE_ORIGIN,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Accept, Content-Type",
      "Cache-Control": cacheControl,
      "Content-Type": "application/json; charset=utf-8",
      "Vary": "Origin"
    }
  });
}

function validCandle(item) {
  if (!item || typeof item.datetime !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(item.datetime)) return false;
  return ["open", "high", "low", "close"].every((field) =>
    Number.isFinite(Number(item[field])) && Number(item[field]) > 0
  );
}

export default {
  async fetch(request, env, context) {
    const requestUrl = new URL(request.url);
    if (requestUrl.pathname !== "/chart") return jsonResponse({ error: "Not found." }, 404);

    const origin = request.headers.get("Origin");
    if (origin && origin !== SITE_ORIGIN) return jsonResponse({ error: "Origin not allowed." }, 403);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: {
      "Access-Control-Allow-Origin": SITE_ORIGIN,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Accept, Content-Type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin"
    } });
    if (request.method !== "GET") return jsonResponse({ error: "Method not allowed." }, 405);

    const chartId = requestUrl.searchParams.get("id");
    const chart = CHARTS[chartId];
    if (!chart) return jsonResponse({ error: "Unknown chart ID." }, 400);
    if (!env.TWELVE_DATA_API_KEY) {
      return jsonResponse({ error: "The Twelve Data API key is not configured on the Worker." }, 503);
    }

    const cacheKey = new Request(`${requestUrl.origin}/_chart-cache/${encodeURIComponent(chartId)}`);
    const cached = await caches.default.match(cacheKey);
    if (cached) return cached;

    const providerUrl = new URL("https://api.twelvedata.com/time_series");
    providerUrl.searchParams.set("symbol", chart.symbol);
    providerUrl.searchParams.set("mic_code", chart.micCode);
    providerUrl.searchParams.set("interval", "1day");
    providerUrl.searchParams.set("order", "asc");
    providerUrl.searchParams.set("outputsize", "250");
    providerUrl.searchParams.set("apikey", env.TWELVE_DATA_API_KEY);

    const providerResponse = await fetch(providerUrl);
    if (!providerResponse.ok) {
      return jsonResponse({ error: "Twelve Data could not provide this chart. Check symbol access and API limits." }, 502);
    }
    const providerData = await providerResponse.json();
    if (providerData.status === "error" || !providerData.meta || !Array.isArray(providerData.values)) {
      return jsonResponse({ error: "Twelve Data returned no chart data. Check exchange coverage, API access and credits." }, 502);
    }
    if (
      String(providerData.meta.symbol || "").toUpperCase() !== chart.symbol.toUpperCase() ||
      String(providerData.meta.mic_code || "").toUpperCase() !== chart.micCode
    ) {
      return jsonResponse({ error: "The returned listing did not match the requested market." }, 502);
    }

    const values = providerData.values.filter(validCandle).slice(0, 500);
    if (!values.length) return jsonResponse({ error: "Twelve Data returned no valid daily prices for this listing." }, 502);

    const response = jsonResponse({
      meta: {
        symbol: chart.symbol,
        mic_code: chart.micCode,
        currency: typeof providerData.meta.currency === "string" ? providerData.meta.currency : ""
      },
      values
    }, 200, `public, max-age=${CACHE_SECONDS}`);
    context.waitUntil(caches.default.put(cacheKey, response.clone()));
    return response;
  }
};
