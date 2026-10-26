const stocksByMarket = {
  us: {
    market: "United States",
    stocks: [
      { ticker: "VTI", name: "Vanguard Total Stock Market ETF", symbol: "AMEX:VTI", chartSymbol: "VTI", risk: "Low", fit: ["low", "medium"], description: "A broad-market fund that offers exposure to many U.S. companies in a single holding.", entry: "Consider a gradual, regular-investing approach; review the fund’s current holdings, costs and price trend first.", hold: "Think in years, not weeks. Revisit your plan periodically and check that broad U.S. exposure still suits you." },
      { ticker: "KO", name: "The Coca-Cola Company", symbol: "NYSE:KO", chartSymbol: "KO", risk: "Low–Medium", fit: ["low", "medium"], description: "A well-known consumer-staples company to research for its established global brands and business resilience.", entry: "Compare the current valuation with company fundamentals and recent results; avoid basing an entry on the brand alone.", hold: "A multi-year research horizon may suit a mature business, but review performance and fundamentals regularly." },
      { ticker: "MSFT", name: "Microsoft Corporation", symbol: "NASDAQ:MSFT", chartSymbol: "MSFT", risk: "Medium", fit: ["medium"], description: "A large technology company with cloud, productivity and software businesses worth examining.", entry: "Review its latest earnings, valuation and chart trend. Consider a staged entry rather than trying to pick a perfect low.", hold: "Consider a multi-year horizon if your thesis remains intact; reassess after earnings and material business changes." },
      { ticker: "NVDA", name: "NVIDIA Corporation", symbol: "NASDAQ:NVDA", chartSymbol: "NVDA", risk: "High", fit: ["high"], description: "A semiconductor and AI-infrastructure company with growth potential and meaningful valuation and volatility risks.", entry: "Check current valuation, earnings expectations and volatility before considering any entry; size exposure cautiously.", hold: "Only consider a longer horizon if you can tolerate sharp drawdowns and regularly re-check the growth thesis." }
    ]
  },
  china: {
    market: "China",
    stocks: [
      { ticker: "600519", name: "Kweichow Moutai Co., Ltd.", symbol: "SSE:600519", chartSymbol: "600519.SS", risk: "Medium", fit: ["low", "medium"], description: "A major Chinese spirits producer; research brand strength alongside pricing, regulation and changing consumer demand.", entry: "Review current valuation, recent company results and policy or consumer trends; confirm trading access and share-lot rules.", hold: "A multi-year horizon requires ongoing checks on demand, regulation and the company’s latest disclosures." },
      { ticker: "601318", name: "Ping An Insurance Group", symbol: "SSE:601318", chartSymbol: "601318.SS", risk: "Medium–High", fit: ["medium", "high"], description: "A diversified financial-services group to examine for its insurance, investment and technology operations.", entry: "Check current financial disclosures, asset quality, valuation and market conditions before considering an entry.", hold: "Review at least after major reporting periods; financial-sector and policy developments can change the thesis." },
      { ticker: "BABA", name: "Alibaba Group Holding", symbol: "NYSE:BABA", chartSymbol: "BABA", risk: "High", fit: ["high", "medium"], description: "A large e-commerce and cloud business with significant competition, regulatory and cross-border listing considerations.", entry: "Compare recent results, valuation and regulatory developments; understand the specific listing and its risks.", hold: "A multi-year thesis needs regular review of competition, governance, regulation and business performance." }
    ]
  },
  hongkong: {
    market: "Hong Kong",
    stocks: [
      { ticker: "0700", name: "Tencent Holdings Limited", symbol: "HKEX:700", chartSymbol: "0700.HK", risk: "Medium–High", fit: ["medium", "high"], description: "A major technology and entertainment group; examine its gaming, advertising, fintech and regulatory exposure.", entry: "Review current valuation, business segment results and regulatory news; confirm your broker supports the HK listing.", hold: "Consider only with a multi-year thesis you can revisit as competition and regulation evolve." },
      { ticker: "0005", name: "HSBC Holdings plc", symbol: "HKEX:5", chartSymbol: "0005.HK", risk: "Medium", fit: ["low", "medium"], description: "An international bank with substantial Asia exposure; explore its dividend policy, capital position and interest-rate sensitivity.", entry: "Check current results, capital strength, dividend details and rate outlook rather than relying on historical yield.", hold: "Review after financial results and when interest-rate or credit conditions materially change." },
      { ticker: "9988", name: "Alibaba Group Holding", symbol: "HKEX:9988", chartSymbol: "9988.HK", risk: "High", fit: ["high", "medium"], description: "A Hong Kong-listed e-commerce and cloud group with competitive, regulatory and share-class risks to understand.", entry: "Compare recent results, valuation and regulatory developments; understand the listing and its risks.", hold: "A multi-year thesis needs regular review of competition, governance, regulation and business performance." }
    ]
  },
  singapore: {
    market: "Singapore",
    stocks: [
      { ticker: "D05", name: "DBS Group Holdings Ltd", symbol: "SGX:D05", chartSymbol: "D05.SI", risk: "Low–Medium", fit: ["low", "medium"], description: "A large Singapore bank to research for its earnings, capital strength, credit exposure and dividend policy.", entry: "Review the latest financial results, valuation, credit quality and dividend announcements before considering a position.", hold: "Reassess after reporting periods and as interest-rate, credit and regional conditions change." },
      { ticker: "C38U", name: "CapitaLand Integrated Commercial Trust", symbol: "SGX:C38U", chartSymbol: "C38U.SI", risk: "Medium", fit: ["low", "medium"], description: "A commercial property trust; examine occupancy, rental outlook, debt costs and distribution sustainability.", entry: "Check current distribution details, property updates, debt profile and interest-rate sensitivity.", hold: "Review distributions, financing costs and property fundamentals regularly; property trusts can still fall in value." },
      { ticker: "O39", name: "Oversea-Chinese Banking Corporation", symbol: "SGX:O39", chartSymbol: "O39.SI", risk: "Medium", fit: ["medium", "low"], description: "A regional banking group worth comparing on capital, loan quality, earnings and dividend policy.", entry: "Compare current valuation and the latest financial disclosures with other regional banks.", hold: "Revisit after results and as regional credit and economic conditions evolve." }
    ]
  },
  malaysia: {
    market: "Malaysia",
    stocks: [
      { ticker: "1155", name: "Malayan Banking Berhad", symbol: "MYX:MAYBANK", chartSymbol: "1155.KL", risk: "Low–Medium", fit: ["low", "medium"], description: "A major Malaysian bank to research for its capital, asset quality, regional earnings and dividend policy.", entry: "Review current financial results, valuation, credit quality and dividend announcements; check local trading rules.", hold: "Reassess after reporting periods and as interest-rate, credit and regional conditions change." },
      { ticker: "1295", name: "Public Bank Berhad", symbol: "MYX:PBBANK", chartSymbol: "1295.KL", risk: "Low–Medium", fit: ["low", "medium"], description: "A Malaysian financial group to evaluate on lending quality, business growth, valuation and capital strength.", entry: "Check the latest results and valuation; compare loan quality and growth with other banks.", hold: "Review performance and fundamentals over a multi-year horizon rather than assuming returns are steady." },
      { ticker: "5183", name: "PETRONAS Chemicals Group Berhad", symbol: "MYX:PCHEM", chartSymbol: "5183.KL", risk: "High", fit: ["high", "medium"], description: "A chemicals producer exposed to global commodity prices, industrial demand and capacity cycles.", entry: "Check current earnings, commodity and feedstock prices, capacity conditions and valuation before considering an entry.", hold: "Cyclical businesses need frequent thesis checks; plan for the possibility of substantial price swings." }
    ]
  }
};

const quotes = [
  { text: "The individual investor should act consistently as an investor and not as a speculator.", attribution: "Benjamin Graham, The Intelligent Investor" },
  { text: "Know what you own, and know why you own it.", attribution: "Peter Lynch" },
  { text: "The stock market is a device for transferring money from the impatient to the patient.", attribution: "Often attributed to Warren Buffett" },
  { text: "An investment in knowledge pays the best interest.", attribution: "Benjamin Franklin" },
  { text: "Risk comes from not knowing what you’re doing.", attribution: "Often attributed to Warren Buffett" },
  { text: "The big money is not in the buying and selling, but in the waiting.", attribution: "Charlie Munger" },
  { text: "The most important quality for an investor is temperament, not intellect.", attribution: "Warren Buffett" }
];

const researchSources = [
  { name: "Investing.com", url: (ticker) => `https://www.investing.com/search/?q=${encodeURIComponent(ticker)}` },
  { name: "Seeking Alpha", url: (ticker) => `https://seekingalpha.com/search?q=${encodeURIComponent(ticker)}` },
  { name: "Simply Wall St", url: (ticker) => `https://simplywall.st/search?q=${encodeURIComponent(ticker)}` },
  { name: "Yahoo Finance", url: (ticker, name) => `https://finance.yahoo.com/search?p=${encodeURIComponent(`${ticker} ${name}`)}` }
];

const form = document.querySelector("#planner-form");
const resultsSection = document.querySelector("#results");
const storageKey = "jeremy-financial-advisor-state";
let savedState = {
  version: 1,
  activeTab: "advice",
  advice: null,
  calculators: {}
};
let previousQuoteIndex = -1;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function selectStocks(market, risk, preferred) {
  const allStocks = stocksByMarket[market].stocks;
  const candidates = allStocks.filter((stock) => stock.fit.includes(risk));
  const ideas = (candidates.length ? candidates : allStocks).slice(0, 3);
  const ensureMinimum = (stocks) => {
    const selected = [...new Map(stocks.map((stock) => [stock.ticker, stock])).values()];
    allStocks.forEach((stock) => {
      if (selected.length < 2 && !selected.some((item) => item.ticker === stock.ticker)) selected.push(stock);
    });
    return selected.slice(0, 5);
  };
  if (!preferred.trim()) return ensureMinimum(ideas);

  const query = preferred.trim().toLowerCase();
  const matches = allStocks.filter((stock) =>
    stock.ticker.toLowerCase().includes(query) || stock.name.toLowerCase().includes(query)
  );
  if (!matches.length) {
    const requestedStock = {
      ticker: preferred.trim(),
      name: preferred.trim(),
      symbol: "",
      risk: "Unverified listing",
      description: "Your requested research target. Confirm the exact company, ticker and exchange before relying on any search result.",
      entry: "Check the latest results, current valuation, market price and material news. Do not rely on a suggested entry without verifying live data.",
      hold: "There is no guaranteed holding period. Set a review horizon that suits your goals and reassess the investment thesis regularly.",
      userEntered: true
    };
    return [requestedStock, ...ensureMinimum(ideas).slice(0, 4)].slice(0, 5);
  }
  return ensureMinimum([...matches, ...ideas, ...allStocks]);
}

function renderCard(stock, index) {
  const links = researchSources.map((source) => {
    return `<a class="source-link" href="${source.url(stock.ticker, stock.name)}" target="_blank" rel="noopener noreferrer">${source.name} <span aria-hidden="true">↗</span></a>`;
  }).join("");
  const initials = stock.ticker.slice(0, 2);
  const listing = stock.symbol ? `${stock.ticker} · ${stock.symbol}` : `${stock.ticker} · User-entered lookup`;
  const marketData = stock.chartSymbol
    ? `<section class="market-data-panel" aria-label="Interactive chart for ${escapeHtml(stock.ticker)}">
        <div class="market-data-heading"><h4>Interactive market chart</h4><span>Yahoo Finance</span></div>
        <a class="market-chart-link" href="https://finance.yahoo.com/quote/${encodeURIComponent(stock.chartSymbol)}/chart/" target="_blank" rel="noopener noreferrer">Open ${escapeHtml(stock.ticker)} chart <span aria-hidden="true">↗</span></a>
        <p class="market-chart-note">Opens the chart for ${escapeHtml(stock.chartSymbol)} on Yahoo Finance. Quotes may be delayed and shown in the listing currency.</p>
      </section>`
    : `<section class="market-data-panel unverified-market-data" aria-label="Chart unavailable for user-entered lookup">
        <div class="market-data-heading"><h4>Interactive market chart</h4><span>Listing not verified</span></div>
        <p>We don’t have a verified chart symbol for this search. Confirm the exact company and exchange using the research links before opening a market chart.</p>
      </section>`;

  return `<article class="stock-card">
    <div class="stock-card-top">
      <div class="stock-identity">
        <span class="stock-monogram" aria-hidden="true">${escapeHtml(initials)}</span>
        <div><h3 class="stock-name">${escapeHtml(stock.name)}</h3><span class="stock-ticker">${escapeHtml(listing)}</span></div>
      </div>
      <span class="risk-tag">${escapeHtml(stock.userEntered ? stock.risk : `${stock.risk} risk`)}</span>
    </div>
    <p class="stock-description">${escapeHtml(stock.description)}</p>
    ${marketData}
    <div class="plan-row"><span class="plan-label">Entry thought</span><span class="plan-value">${escapeHtml(stock.entry)}</span></div>
    <div class="plan-row"><span class="plan-label">Time horizon</span><span class="plan-value">${escapeHtml(stock.hold)}</span></div>
    <div class="source-list" aria-label="Research ${escapeHtml(stock.ticker)}">${links}</div>
  </article>`;
}

function displayQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  if (quotes.length > 1 && index === previousQuoteIndex) index = (index + 1) % quotes.length;
  previousQuoteIndex = index;
  document.querySelector("#quote-text").textContent = quotes[index].text;
  document.querySelector("#quote-attribution").textContent = `— ${quotes[index].attribution}`;
}

function renderStockAdvice(formData, scrollToResults = true) {
  const market = formData.get("market");
  const budget = Number(formData.get("budget"));
  const stockIdeas = selectStocks(market, formData.get("risk"), formData.get("preferred"));
  const hasRiskMatches = stocksByMarket[market].stocks.some((stock) => stock.fit.includes(formData.get("risk")));
  const marketName = stocksByMarket[market].market;
  const budgetLabel = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(budget);
  document.querySelector("#results-intro").textContent =
    `For ${marketName}, a ${formData.get("risk")}-risk starting point and a planned budget of ${budgetLabel}. ${hasRiskMatches ? "These examples are not live-screened recommendations." : "No starter-list examples are tagged for this risk flavour; broader market ideas are shown for research, not as risk-matched recommendations."} Each plan includes 2–5 ideas.`;
  document.querySelector("#results-grid").innerHTML = stockIdeas.map(renderCard).join("");
  const criteriaNote = document.querySelector("#criteria-note");
  const criteria = formData.get("criteria").trim();
  const preferred = formData.get("preferred").trim();
  if (criteria || preferred) {
    const noteParts = [];
    if (preferred) {
      const wasMatched = stocksByMarket[market].stocks.some((stock) =>
        stock.ticker.toLowerCase().includes(preferred.toLowerCase()) || stock.name.toLowerCase().includes(preferred.toLowerCase())
      );
      noteParts.push(wasMatched
        ? `Your preference “${escapeHtml(preferred)}” is included above.`
        : `Your preference “${escapeHtml(preferred)}” is included as an unverified research target. Confirm its exact listing and ticker using the research sources.`);
    }
    if (criteria) noteParts.push(`Research note to verify: “${escapeHtml(criteria)}”. This free-text criterion is not automatically checked against live financial data.`);
    criteriaNote.innerHTML = `<strong>Your notes:</strong> ${noteParts.join(" ")}`;
    criteriaNote.hidden = false;
  } else {
    criteriaNote.hidden = true;
    criteriaNote.textContent = "";
  }

  displayQuote();
  resultsSection.hidden = false;
  if (scrollToResults) resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const budget = Number(new FormData(form).get("budget"));
  if (!Number.isFinite(budget) || budget < 1000) {
    document.querySelector("#budget").setCustomValidity("Enter a budget of at least USD 1,000.");
    document.querySelector("#budget").reportValidity();
    return;
  }
  document.querySelector("#budget").setCustomValidity("");

  renderStockAdvice(new FormData(form));
  savedState.activeTab = "advice";
  savedState.advice = Object.fromEntries(new FormData(form));
  persistSavedState();
});

document.querySelector("#budget").addEventListener("input", (event) => {
  event.currentTarget.setCustomValidity("");
});

const tabs = [...document.querySelectorAll(".page-tab")];
const panels = tabs.map((tab) => document.querySelector(`#${tab.getAttribute("aria-controls")}`));

function activateTab(activeTab, moveFocus = false, saveSelection = true) {
  tabs.forEach((tab, index) => {
    const selected = tab === activeTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panels[index].hidden = !selected;
  });
  if (moveFocus) activeTab.focus();
  if (saveSelection) {
    savedState.activeTab = activeTab.id === "calculators-tab" ? "calculators" : "advice";
    persistSavedState();
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(tab);
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex + tabs.length - 1) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    activateTab(tabs[nextIndex], true);
  });
});

document.querySelector(".top-link").addEventListener("click", () => activateTab(tabs[0]));

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

function saveCalculatorSearch(name, values) {
  savedState.activeTab = "calculators";
  savedState.calculators[name] = Object.fromEntries(values);
  persistSavedState();
}

function showCalculatorResult(element, content, error = false) {
  element.classList.toggle("calculator-error", error);
  element.innerHTML = content;
  element.hidden = false;
}

const roiForm = document.querySelector("#roi-form");
const roiDurationFields = document.querySelector("#roi-duration-fields");
const roiDateFields = document.querySelector("#roi-date-fields");

function updateRoiPeriodMode() {
  const useDates = roiForm.elements.namedItem("period-mode").value === "dates";
  roiDurationFields.hidden = useDates;
  roiDateFields.hidden = !useDates;
  roiDurationFields.querySelectorAll("input").forEach((input) => {
    input.disabled = useDates;
  });
  roiDateFields.querySelectorAll("input").forEach((input) => {
    input.disabled = !useDates;
    input.required = useDates;
  });
}

roiForm.querySelectorAll('input[name="period-mode"]').forEach((input) => {
  input.addEventListener("change", updateRoiPeriodMode);
});
updateRoiPeriodMode();

document.querySelector("#roi-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const initial = Number(values.get("initial"));
  const final = Number(values.get("final"));
  const gain = final - initial;
  const totalRoi = (gain / initial) * 100;
  const mode = values.get("period-mode");
  let termYears;
  let termLabel;
  if (mode === "duration") {
    const years = Number(values.get("years"));
    const months = Number(values.get("months"));
    termYears = years + months / 12;
    termLabel = `${years} year${years === 1 ? "" : "s"}, ${months} month${months === 1 ? "" : "s"}`;
  } else {
    const startDate = Date.parse(`${values.get("start-date")}T00:00:00Z`);
    const endDate = Date.parse(`${values.get("end-date")}T00:00:00Z`);
    const elapsedDays = (endDate - startDate) / 86400000;
    termYears = elapsedDays / 365.2425;
    termLabel = `${elapsedDays} day${elapsedDays === 1 ? "" : "s"}`;
  }
  const result = document.querySelector("#roi-result");
  if (!Number.isFinite(termYears) || termYears <= 0) {
    showCalculatorResult(result, "Enter a term greater than zero, or choose an end date after the start date.", true);
    return;
  }
  const annualizedRoi = final === 0
    ? -100
    : (Math.pow(final / initial, 1 / termYears) - 1) * 100;
  if (!Number.isFinite(gain) || !Number.isFinite(totalRoi) || !Number.isFinite(annualizedRoi)) {
    showCalculatorResult(result, "These values exceed the calculator’s supported range. Try smaller amounts or a longer term.", true);
    return;
  }
  const gainLabel = `${gain >= 0 ? "Gain" : "Loss"}: ${currencyFormatter.format(Math.abs(gain))}`;
  showCalculatorResult(
    result,
    `<strong>Total ROI: ${totalRoi.toFixed(2)}%</strong><span>Annualized ROI: ${annualizedRoi.toFixed(2)}%</span><span>${gainLabel} · Term: ${termLabel}</span>`
  );
  saveCalculatorSearch("roi", values);
});

document.querySelector("#interest-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const principal = Number(values.get("principal"));
  const annualRate = Number(values.get("rate")) / 100;
  const frequency = Number(values.get("frequency"));
  const years = Number(values.get("years"));
  saveCalculatorSearch("interest", values);
  const futureValue = principal * Math.pow(1 + annualRate / frequency, frequency * years);
  const result = document.querySelector("#interest-result");
  if (!Number.isFinite(futureValue)) {
    showCalculatorResult(result, "These values exceed the calculator’s supported range. Try a lower rate or shorter time period.", true);
    return;
  }
  showCalculatorResult(
    result,
    `<strong>Estimated future value: ${currencyFormatter.format(futureValue)}</strong><span>Interest earned: ${currencyFormatter.format(futureValue - principal)}</span>`
  );
});

document.querySelector("#loan-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const principal = Number(values.get("principal"));
  const monthlyRate = Number(values.get("rate")) / 100 / 12;
  const paymentCount = Number(values.get("years")) * 12;
  saveCalculatorSearch("loan", values);
  const monthlyPayment = monthlyRate === 0
    ? principal / paymentCount
    : principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -paymentCount));
  const totalInterest = monthlyPayment * paymentCount - principal;
  const result = document.querySelector("#loan-result");
  if (!Number.isFinite(monthlyPayment) || !Number.isFinite(totalInterest)) {
    showCalculatorResult(result, "These values exceed the calculator’s supported range. Check the loan amount, rate and term.", true);
    return;
  }
  showCalculatorResult(
    result,
    `<strong>Estimated monthly payment: ${currencyFormatter.format(monthlyPayment)}</strong><span>Total interest: ${currencyFormatter.format(totalInterest)}</span>`
  );
});

function showStorageStatus(message) {
  const status = document.querySelector("#storage-status");
  status.textContent = message;
  status.hidden = !message;
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function persistSavedState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedState));
    showStorageStatus("");
  } catch (error) {
    showStorageStatus("This browser could not save your searches. They may not be available after refresh.");
  }
}

function loadSavedState() {
  let storedValue;
  try {
    storedValue = localStorage.getItem(storageKey);
  } catch (error) {
    showStorageStatus("Browser storage is unavailable; previous searches could not be loaded.");
    return;
  }
  if (!storedValue) return;

  let parsed;
  try {
    parsed = JSON.parse(storedValue);
  } catch (error) {
    showStorageStatus("Saved searches are damaged and could not be read. Run a new search to replace them.");
    return;
  }
  if (!isRecord(parsed) || parsed.version !== 1) {
    showStorageStatus("Saved searches could not be read. Run a new search to replace them.");
    return;
  }
  savedState = {
    version: 1,
    activeTab: parsed.activeTab === "calculators" ? "calculators" : "advice",
    advice: isRecord(parsed.advice) ? parsed.advice : null,
    calculators: isRecord(parsed.calculators) ? parsed.calculators : {}
  };
}

function restoreFormValues(targetForm, values) {
  Object.entries(values).forEach(([name, value]) => {
    if (typeof value !== "string") return;
    Array.from(targetForm.elements)
      .filter((field) => field.name === name)
      .forEach((field) => {
        if (field.type === "radio") {
          field.checked = field.value === value;
        } else {
          field.value = value;
        }
      });
  });
}

function restoreSavedSearches() {
  loadSavedState();
  activateTab(savedState.activeTab === "calculators" ? tabs[1] : tabs[0], false, false);

  if (savedState.advice) {
    restoreFormValues(form, savedState.advice);
    if (form.checkValidity() && stocksByMarket[form.elements.market.value]) {
      renderStockAdvice(new FormData(form), false);
    }
  }

  const calculatorForms = {
    roi: document.querySelector("#roi-form"),
    interest: document.querySelector("#interest-form"),
    loan: document.querySelector("#loan-form")
  };
  Object.entries(calculatorForms).forEach(([name, calculatorForm]) => {
    const values = savedState.calculators[name];
    if (!isRecord(values)) return;
    restoreFormValues(calculatorForm, values);
    if (name === "roi") updateRoiPeriodMode();
    if (calculatorForm.checkValidity()) calculatorForm.requestSubmit();
  });
}

function resetAll() {
  form.reset();
  document.querySelector("#budget").setCustomValidity("");
  resultsSection.hidden = true;
  document.querySelector("#results-intro").textContent = "";
  document.querySelector("#results-grid").replaceChildren();
  document.querySelector("#criteria-note").textContent = "";
  document.querySelector("#criteria-note").hidden = true;
  document.querySelector("#quote-text").textContent = "";
  document.querySelector("#quote-attribution").textContent = "";

  const calculatorForms = [
    document.querySelector("#roi-form"),
    document.querySelector("#interest-form"),
    document.querySelector("#loan-form")
  ];
  calculatorForms.forEach((calculatorForm) => calculatorForm.reset());
  updateRoiPeriodMode();
  document.querySelectorAll(".calculator-result").forEach((result) => {
    result.hidden = true;
    result.classList.remove("calculator-error");
    result.textContent = "";
  });

  savedState = { version: 1, activeTab: "advice", advice: null, calculators: {} };
  activateTab(tabs[0], false, false);
  try {
    localStorage.removeItem(storageKey);
    showStorageStatus("");
  } catch (error) {
    showStorageStatus("The page was reset, but saved searches could not be cleared from browser storage.");
  }
}

document.querySelector("#reset-all").addEventListener("click", resetAll);
restoreSavedSearches();

fetch("https://jeremytantat.goatcounter.com/counter/TOTAL.json")
  .then((response) => {
    if (!response.ok) throw new Error(`GoatCounter returned HTTP ${response.status}.`);
    return response.json();
  })
  .then((data) => {
    if (!data || typeof data.count !== "string") throw new Error("GoatCounter returned an invalid visitor count.");
    document.querySelector("#visitor-count").textContent = data.count;
  })
  .catch((error) => {
    document.querySelector("#visitor-count").textContent = "Unavailable";
    console.error("Unable to load the GoatCounter visitor count.", error);
  });
