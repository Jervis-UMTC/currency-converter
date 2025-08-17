const converterForm = document.getElementById('converter-form');
const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const result = document.getElementById('result');
const errorBox = document.getElementById('error-container')

window.addEventListener("load", fetchCurrencies);

converterForm.addEventListener("submit", convertCurrency)

//https://open.er-api.com/v6/latest/USD
async function fetchCurrencies() {
  const response = await fetch('https://open.er-api.com/v6/latest/USD');
  const data = await response.json();
  console.log(data);

  const currencyOptions = Object.keys(data.rates);
  console.log(currencyOptions);

  currencyOptions.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;

    fromCurrency.appendChild(option);
    toCurrency.appendChild(option.cloneNode(true));
  });
}

async function convertCurrency(e) {
  e.preventDefault();

  const amountValue = parseFloat(amount.value);
  if (amountValue < 0) {
    errorBox.textContent = 'Please enter a valid number!';
    result.classList.add('hidden');
    errorBox.classList.remove('hidden');
    setTimeout(() => {
      amount.value = '';
      result.textContent = '';
      errorBox.textContent = '';
      result.classList.remove('hidden');
      errorBox.classList.add('hidden');
    }, 2000);
    return;
  };

  const toCurrencyValue = toCurrency.value;
  const fromCurrencyValue = fromCurrency.value;

  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`);
  const data = await response.json();

  const rate = data.rates[toCurrencyValue];
  const convertedAmount = (amountValue * rate).toFixed(2);

  result.textContent = `${amountValue} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`;
}