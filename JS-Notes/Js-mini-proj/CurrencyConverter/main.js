const API_KEY = "cur_live_Z387AqIrRxf9g6LqclogRwi0qohU47w81Nr1Rofy";
const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`;

// Grabs references to all the important HTML elements (form, inputs, selects, result/error displays) using getElementById.
const form = document.getElementById("converterForm");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const resultDisplay = document.getElementById("resultDisplay");
const errorDisplay = document.getElementById("errorDisplay");

// Fetches the latest currency data from the API.
const fetchCurrencies = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Extracts all currency codes using Object.keys(data.data) and sort them alphabetically with .sort().
    const currencies = Object.keys(data.data).sort((a, b) =>
      a.localeCompare(b)
    );

    // Uses .map() to create <option> elements for each currency.
    const options = currencies
      .map((currency) => `<option value="${currency}">${currency}</option>`)
      .join("");

    // Populates both dropdowns (fromCurrency and toCurrency) with these options.
    fromCurrency.innerHTML = options;
    toCurrency.innerHTML = options;

    // Sets default selections to USD (from) and INR (to).
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
  } catch (error) {
    showError("Failed to fetch currencies. Please try again later.");
  }
};

// Fetches the latest rates again from the API
const convertCurrency = async (amount, from, to) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // Gets the exchange rates for the selected "from" and "to" currencies.
    const rates = data.data;
    const fromRate = rates[from].value;
    const toRate = rates[to].value;

    // Converts the input amount using the rates.
    const convertedAmount = (amount * toRate) / fromRate;
    return convertedAmount.toFixed(2);
  } catch (error) {
    throw new Error("Failed to convert currency");
  }
};

// Displays an error message and hides the result.
const showError = (message) => {
  errorDisplay.textContent = message;
  errorDisplay.style.display = "block";
  resultDisplay.style.display = "none";
};

// Shows the conversion result in a readable format and hides the error message.
const showResult = (amount, from, to, convertedAmount) => {
  resultDisplay.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
  resultDisplay.style.display = "block";
  errorDisplay.style.display = "none";
};

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorDisplay.style.display = "none";

  const amountValue = parseFloat(amount.value);
  const fromValue = fromCurrency.value;
  const toValue = toCurrency.value;

//   if (isNaN(amountValue) || amountValue <= 0) {
//     showError("Please enter a valid amount");
//     return;
//   }

  try {
    const convertedAmount = await convertCurrency(
      amountValue,
      fromValue,
      toValue
    );
    result.value = convertedAmount;
    showResult(amountValue, fromValue, toValue, convertedAmount);
  } catch (error) {
    showError(error.message);
  }
});

// Initialize the converter
fetchCurrencies();
