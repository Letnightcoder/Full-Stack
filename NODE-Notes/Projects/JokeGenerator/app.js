import https from "https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (Response) => {
    let data = "";
    Response.on("data", (chunk) => {
      data += chunk;
    });

    Response.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type} joke:`);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });

    Response.on("error", (err) => {
      console.log(err.message);
    });
  });
};

getJoke();
