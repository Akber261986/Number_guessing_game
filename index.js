#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to Number Guess Game. ");
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Please Guess the number between 1 - 10."
    }
]);
if (answer.guessNumber === randomNumber) {
    console.log("Congratulations! You Guess the correct Number.");
}
else {
    console.log("Sorry!! You Guess the wrong Number.");
}
