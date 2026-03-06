
import { add,sub,mul,div } from "./cal.js";
import readlineSync from "readline-sync";




let num1 = readlineSync.questionInt("Enter first number: ");
let num2 = readlineSync.questionInt("Enter second number: ");

console.log("\nAddition =",add(num1, num2));
console.log("Subtraction =",sub(num1, num2));
console.log("Multiplication =",mul(num1, num2));
console.log("Division =", div(num1, num2));