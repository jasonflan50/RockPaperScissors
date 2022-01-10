/* This function will generate the computers moves */
function computerPlay() {
    const moves = ["ROCK", "PAPER", "SCISSORS"];
    const int = Math.floor(Math.random() * moves.length);

    return moves[int];
}

/* This function will simulate a round */
function playRound() {

    /* Initialize and store moves */
    const player = prompt("Choose Rock, Paper or Scissors: ")
    const comp = computerPlay();

    /* Converts user input to Upper Case, for logical comparison */
    const playMove = player.toUpperCase();

    /* For debugging
    console.log(playMove);
    console.log(comp);
    */

    /* Clean up output */
    compOutput = comp.charAt(0) + comp.slice(1).toLowerCase();
    playerOutput = playMove.charAt(0) + player.slice(1).toLowerCase();


    /* --Logic-- */
    if (playMove === comp) {
        return ("You tied the computer this round!");
    }
    if (playMove === "ROCK" && comp === "PAPER") {
        return ("You lost this round, Rock loses to Paper");
    }
    if (playMove === "SCISSORS" && comp === "ROCK") {
        return ("You lost this round, Scissor loses to Rock");
    }
    if (playMove === "PAPER" && comp === "SCISSORS") {
        return ("You lost this round, Paper loses to Scissor");
    }
    if (playMove != "PAPER" && playMove != "ROCK" && playMove != "SCISSORS") {
        return ("Not a valid move, read the rules.");
    }

    return (`You won this round! ${playerOutput} beats ${compOutput}!`);

}

/* This function will play a 5 round game and declare a winner */
function game() {

    console.log("Best 2 out of 3!");

    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 20; i++) {
        let score = playRound();
        console.log(score);

        if (score.charAt(4) === "l") {
            compScore++;
        }
        else if (score.charAt(4) === "w") {
            playerScore++;
        }

        if (playerScore === 2) {
            console.log("You beat the computer, nice job!")
            return;
        }
        else if (compScore === 2) {
            console.log("You lost the game, better luck next time!")
            return;
        }
    }
}

/* For debugging
console.log(computerPlay());
console.log(playInput);
console.log("----------------");
*/

game();