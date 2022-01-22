// Initialize buttons for user interaction
const rock = document.getElementById('rock').addEventListener('click', () => playRound('ROCK'));
const paper = document.getElementById('paper').addEventListener('click', () => playRound('PAPER'));
const scissors = document.getElementById('scissors').addEventListener('click', () => playRound('SCISSORS'));

// Initializes the scoreboard 
const roundIndicator = document.getElementById('roundIndicator');
const scoreBoard = document.getElementById('scoreBoard');

// Initializes variables to keep track of the score
let playerScore = 0;
let compScore = 0;

// Chooses the computers move
function computerPlay() {
    const moves = ["ROCK", "PAPER", "SCISSORS"];
    const int = Math.floor(Math.random() * moves.length);

    return moves[int];
}

/* This function will simulate a game of RPS */
function playRound(player) {
    
    /* Initialize and store computers move */
    const comp = computerPlay();

    // For debugging & seeing moves
    //console.log(player);
    //console.log(comp);

    /* Clean up output */
    compOutput = comp.charAt(0) + comp.slice(1).toLowerCase();
    playerOutput = player.charAt(0) + player.slice(1).toLowerCase();


    /* --Logic-- */
    if (player === comp) {
        roundIndicator.innerText=(`You chose: ${playerOutput} \n Computer chose: ${compOutput} \n You tied the computer this round!`);
        scoreBoard.innerText=(`Player Score: ${playerScore} \n Computer Score: ${compScore}`);
    }
    else if (player === "ROCK" && comp === "PAPER") {
        roundIndicator.innerText=(`You chose: ${playerOutput} \n Computer chose: ${compOutput} \n You lost this round, Rock loses to Paper`);
        compScore += 1;
        scoreBoard.innerText=(`Player Score: ${playerScore} \n Computer Score: ${compScore}`);
    }
    else if (player === "SCISSORS" && comp === "ROCK") {
        roundIndicator.innerText=(`You chose: ${playerOutput} \n Computer chose: ${compOutput} \n You lost this round, Scissors lose to Rock`);
        compScore += 1;
        scoreBoard.innerText=(`Player Score: ${playerScore} \n Computer Score: ${compScore}`);
    }
    else if (player === "PAPER" && comp === "SCISSORS") {
        roundIndicator.innerText=(`You chose: ${playerOutput} \n Computer chose: ${compOutput} \n You lost this round, Paper loses to Scissors`);
        compScore += 1;
        scoreBoard.innerText=(`Player Score: ${playerScore} \n Computer Score: ${compScore}`);
    }
    else if (player != "PAPER" && player != "ROCK" && player != "SCISSORS") {
        roundIndicator.innerText=(`Not a valid move, read the rules.`);
        scoreBoard.innerText=(`Player Score: ${playerScore} \n Computer Score: ${compScore}`);
    }
    else {
        roundIndicator.innerText=(`You chose: ${playerOutput} \n Computer chose: ${compOutput} \n You won this round! ${playerOutput} beats ${compOutput}!`);
        playerScore += 1;
        scoreBoard.innerText=(`Player Score: ${playerScore} \n Computer Score: ${compScore}`);
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