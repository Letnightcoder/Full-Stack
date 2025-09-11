import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "25f3e3744688a458f9af1561";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question(
        "Enter the currency to convert to (e.g. EUR, INR, GBP): ",
        (Currency) => {
          const rate = rates[Currency.toUpperCase()];
          if (rate) {
            const convertedAmount = amount * rate;
            console.log(
                chalk.green.bgBlue.bold(`\n${amount} USD is equal to ${convertedAmount.toFixed(2)} ${Currency}.`)
            );
          } else {
            console.log(
              chalk.red("\nInvalid currency code. Please try again.")
            );
          }

          rl.close();
        }
      );
    });
  });
});
