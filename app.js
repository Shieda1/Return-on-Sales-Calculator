// https://calculator.swiftutors.com/return-on-sales-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonSalesRadio = document.getElementById('returnonSalesRadio');
const netIncomeBeforeInterestTax = document.getElementById('netIncomeBeforeInterestTax');
const salesRevenueRadio = document.getElementById('salesRevenueRadio');

let returnonSales;
let netIncomeBeforeInteres = v1;
let salesRevenue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

returnonSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income (Before Interest & Tax)';
  variable2.textContent = 'Sales Revenue';
  netIncomeBeforeInteres = v1;
  salesRevenue = v2;
  result.textContent = '';
});

netIncomeBeforeInterestTax.addEventListener('click', function() {
  variable1.textContent = 'Return on Sales (ROS)';
  variable2.textContent = 'Sales Revenue';
  returnonSales = v1;
  salesRevenue = v2;
  result.textContent = '';
});

salesRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Sales (ROS)';
  variable2.textContent = 'Net Income (Before Interest & Tax)';
  returnonSales = v1;
  netIncomeBeforeInteres = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonSalesRadio.checked)
    result.textContent = `Return on Sales = ${computeReturnonSales().toFixed(2)} %`;

  else if(netIncomeBeforeInterestTax.checked)
    result.textContent = `Net Income (Before Interest & Tax) = ${computeNetIncomeBeforeInterestTax().toFixed(2)}`;

  else if(salesRevenueRadio.checked)
    result.textContent = `Sales Revenue = ${computeSalesRevenue().toFixed(2)}`;
})

// calculation

function computeReturnonSales() {
  return (Number(netIncomeBeforeInteres.value) / Number(salesRevenue.value)) * 100;
}

function computeNetIncomeBeforeInterestTax() {
  return (Number(returnonSales.value) / 100) * Number(salesRevenue.value);
}

function computeSalesRevenue() {
  return Number(netIncomeBeforeInteres.value) / (Number(returnonSales.value) / 100);
}