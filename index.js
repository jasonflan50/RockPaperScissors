/* This function will generate the computers moves */
function computerPlay() {
    const moves = ["ROCK", "PAPER", "SCISSORS"];
    const int = Math.floor(Math.random() * moves.length);

    return moves[int];
}

/* Initialize and store moves */
const playInput = prompt("Choose Rock, Paper or Scissors: ")
const compInput = computerPlay();

/* This function will simulate a round */
function playRound(player, comp) {

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
    if (playMove === compInput) {
        return ("You tied the computer!");
    }
    if (playMove === "ROCK" && comp === "PAPER") {
        return ("You lost, Rock loses to Paper");
    }
    if (playMove === "SCISSORS" && comp === "ROCK") {
        return ("You lost, Scissor loses to Rock");
    }
    if (playMove === "PAPER" && comp === "SCISSORS") {
        return ("You lost, Paper loses to Scissor");
    }
    if (playMove != "PAPER" && playMove != "ROCK" && playMove != "SCISSORS") {
        return ("Not a valid move, read the rules.");
    }

    return (`You won! ${playerOutput} beats ${compOutput}!`);

}

/* For debugging
console.log(computerPlay());
console.log(playInput);
console.log("----------------");
*/

console.log(playRound(playInput, compInput));