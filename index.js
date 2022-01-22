const rock = document.getElementById('rock').addEventListener('click', () => playRound('ROCK'));
const paper = document.getElementById('paper').addEventListener('click', () => playRound('PAPER'));
const scissors = document.getElementById('scissors').addEventListener('click', () => playRound('SCISSORS'));
//const rock3 = document.querySelector('button')

function computerPlay() {
    const moves = ["ROCK", "PAPER", "SCISSORS"];
    const int = Math.floor(Math.random() * moves.length);

    return moves[int];
}

/* This function will simulate a round */
function playRound(player) {
    
    /* Initialize and store computers move */
    const comp = computerPlay();

    // For debugging
    console.log(player);
    console.log(comp);
    

    /* Clean up output */
    compOutput = comp.charAt(0) + comp.slice(1).toLowerCase();
    playerOutput = player.charAt(0) + player.slice(1).toLowerCase();


    /* --Logic-- */
    if (player === comp) {
        console.log ("You tied the computer this round!");
    }
    else if (player === "ROCK" && comp === "PAPER") {
        console.log  ("You lost this round, Rock loses to Paper");
    }
    else if (player === "SCISSORS" && comp === "ROCK") {
        console.log  ("You lost this round, Scissors lose to Rock");
    }
    else if (player === "PAPER" && comp === "SCISSORS") {
        console.log  ("You lost this round, Paper loses to Scissors");
    }
    else if (player != "PAPER" && player != "ROCK" && player != "SCISSORS") {
        console.log  ("Not a valid move, read the rules.");
    }
    else {
        console.log  (`You won this round! ${playerOutput} beats ${compOutput}!`);
    }

}


/* This function will play a best of 3 round game and declare a winner */
//function game() {
//
    //console.log("Best 2 out of 3!");
//
    /* variables to keep score */
    //let playerScore = 0;
    //let compScore = 0;

    /* loop to play through multiple rounds */
    //for (let i = 0; i < 20; i++) {
        //let score = playRound();
        //console.log(score);
//
        /* increase computer score */
        //if (score.charAt(4) === "l") {
        //    compScore++;
        //}
        /* increase player score */
       // else if (score.charAt(4) === "w") {
        //    playerScore++;
        //}
//
        /* Declare a winner */
       // if (playerScore === 2) {
        //    console.log("You beat the computer, nice job!")
        //    return;
        //}
        //else if (compScore === 2) {
        //    console.log("You lost the game, better luck next time!")
         //   return;
       // }
   // }
//}

/* For debugging
console.log(computerPlay());
console.log("----------------");
*/

//game();