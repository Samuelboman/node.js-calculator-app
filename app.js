
import chalk from "chalk";                  
import { add, subtract, multiply, divide } from "./calc-modules/operations.js "; 
import { saveResult } from "./calc-modules/Saver.js ";  


console.log(chalk.blue("BD/2025/TC3/135"));

const a = 12, b = 4;

try {
 let sum = add(a, b);
  console.log(chalk.green(`${a} + ${b} = ${sum}`));
  saveResult("Addition", sum);

  let diff = subtract(a, b);
  console.log(chalk.yellow(`${a} - ${b} = ${diff}`));
  saveResult("Subtraction", diff);

 let prod = multiply(a, b);
  console.log(chalk.magenta(`${a} * ${b} = ${prod}`));
  saveResult("Multiplication", prod);

  let quotient = divide(a, b);
  console.log(chalk.cyan(`${a} / ${b} = ${quotient}`));
  saveResult("Division", quotient);

} catch (err) {
  console.error(chalk.red("Error: " + err.message));
}