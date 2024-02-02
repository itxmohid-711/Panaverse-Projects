import inquirer from 'inquirer';
async function guessNumber() {
    let a = Math.floor(Math.random() * 101);
    let score = 100;
    let inp;
    do {
        inp = await inquirer.prompt([
            {
                type: "number",
                name: "GuessedNumber",
                message: "Enter a number between 1 to 100. What's your guess?"
            }
        ]);
        const guessedNumber = Number(inp.GuessedNumber);
        if (guessedNumber < a) {
            console.log("Your number is smaller than the actual number.");
        }
        else if (guessedNumber > a) {
            console.log("Your number is greater than the actual number.");
        }
        else if (guessedNumber < 1 || guessedNumber > 100) {
            console.log("Please enter a number between 1 to 100.");
        }
        score--;
    } while (inp.GuessedNumber !== a && score > 0);
    if (inp.GuessedNumber === a) {
        console.log("Congratulations! You guessed the number.");
        console.log(`You guessed the actual number in ${100 - score} chances.`);
    }
    else {
        console.log("Sorry, you didn't guess the number. Better luck next time!");
    }
}
guessNumber();
