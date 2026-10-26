# Twelve Data chart Worker

The website is static, so its Twelve Data API key must not be added to `app.js`, HTML, or any public repository file. This Cloudflare Worker keeps the key in a Worker secret and only serves a fixed allowlist of chart IDs.

## Deploy

In PowerShell, from the `market-data-worker` folder:

```powershell
npx wrangler login
npx wrangler secret put TWELVE_DATA_API_KEY
npx wrangler deploy
```

When prompted for the secret, enter the Twelve Data key in your terminal. Do not share it in chat or commit it. The Worker caches successful daily chart responses for 15 minutes.

After deployment, copy the Worker URL (for example, `https://financial-advisor-market-data.<your-subdomain>.workers.dev`). In the root `app.js`, set `marketDataWorkerUrl` to that URL without a trailing slash, then publish the website. The Worker allows browser requests from `https://jeremytantat.github.io`; update `SITE_ORIGIN` in `src/index.mjs` if the site uses a different origin.

Twelve Data must provide access to the requested exchange and symbol on your account. The Worker checks the returned exchange MIC before displaying data; unsupported symbols or plan/credit limits appear as chart errors. The chart uses daily OHLC candles, zoom, and a range slider.
