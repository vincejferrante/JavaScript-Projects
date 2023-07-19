const APIkey = "key";

const button = document.querySelector(".btnTicker");
const results = document.querySelector(".results"); 

button.addEventListener("click", () => {
  const tickerSymbol = document.querySelector(".ticker");
  const user_input = tickerSymbol.value;

  // Fetch income statement
  fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${user_input}&apikey=${APIkey}`)
    .then(response => response.json())
    .then(incomeData => {
        const netIncome = incomeData.annualReports.map(report => report.netIncome / 100000000).reverse();
        const Revenue = incomeData.annualReports.map(report => report.totalRevenue / 100000000).reverse();
        console.log("Net Income: ", netIncome[4], "Revenue: ", Revenue[4]);
        
        // Fetch balance sheet
        fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${user_input}&apikey=${APIkey}`)
          .then(response => response.json())
          .then(balanceData => {
            const assets = balanceData.annualReports.map(report => report.totalAssets / 100000000).reverse();
            const debt = balanceData.annualReports.map(report => report.totalLiabilities / 100000000).reverse();
            const equity = balanceData.annualReports.map(report => report.totalShareholderEquity / 100000000).reverse();
            console.log("Total Assets:", assets[4], "Total Assets", debt[4], "Total Equity:", equity[4]);
              
              // Fetch cash flow statement
              fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${user_input}&apikey=${APIkey}`)
                .then(response => response.json())
                .then(cashFlowData => {
                    //Free cash flow = operating cash flow - capital expenditures
                    const operating_Cash_Flow = cashFlowData.annualReports.map(report => report.operatingCashflow / 100000000).reverse();
                    const Capital_Expenditures = cashFlowData.annualReports.map(report => report.capitalExpenditures / 100000000).reverse();
                    const free_cash_flow = operating_Cash_Flow[4] - Capital_Expenditures[4];
                    console.log("Free Cash Flow:", free_cash_flow);
                    // Process and use the fetched data as needed
                })
                .catch(error => {
                  console.log('Error fetching cash flow statement:', error);
                });
          })
          .catch(error => {
            console.log('Error fetching balance sheet:', error);
          });
    })
    .catch(error => {
      console.log('Error fetching income statement:', error);
    });
});

