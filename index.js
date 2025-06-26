import chalk from "chalk";
import axios from "axios";

console.log("Hello Boolean");

console.log(chalk.bgBlue("Hello world!"));

console.log(process.env.secret);

const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(apiUrl).then((res) => {
  console.log(res.data);
});

console.log(process.argv[2]);
console.log("Hello " + process.argv[2]);
