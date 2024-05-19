#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(chalk.bgYellow(chalk.black(`\tWELCOME TO NUMBER GUESSING GAME`)));
let condition = true;
let chance = 0;
while (condition) {
    let userInput = await inquirer.prompt([
        {
            name: "Guess",
            type: "number",
            message: "Guess a Number between (1 - 100)"
        }
    ]);
    chance++;
    if (chance === 10) {
        console.log(chalk.red(`Sorry!! you have no More chance..`));
    }
    if (randomNumber === userInput.Guess) {
        console.log(chalk.green `Congratulations!! You Guess the Correct Number.`);
    }
    else if (randomNumber > userInput.Guess) {
        console.log(chalk.yellow(`The Number is Greater then ${userInput.Guess}`));
    }
    else if (randomNumber < userInput.Guess) {
        console.log(chalk.yellow(`The Number is less then ${userInput.Guess} `));
    }
    condition = !(randomNumber === userInput.Guess) && (chance != 10);
    if (randomNumber != userInput.Guess) {
        console.log(chalk.cyanBright(`You have remaining ${10 - chance} Chances.`));
    }
    else {
        console.log(chalk.blue(`You got the number in ${chance} tries`));
    }
}
