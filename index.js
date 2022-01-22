// Initialize buttons for user interaction
const rock = document.getElementById('rock').addEventListener('click', () => playRound('ROCK'));
const paper = document.getElementById('paper').addEventListener('click', () => playRound('PAPER'));
const scissors = document.getElementById('scissors').addEventListener('click', () => playRound('SCISSORS'));

// Initializes the scoreboard 
const roundIndicator = document.getElementById('roundIndicator');
const scoreBoard = document.getElementById('scoreBoard');
const gameWinner = document.getElementById('gameWinner');

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

    checkWinner(playerScore, compScore);

}

function checkWinner(p, c){
    if (p === 5 || c === 5){
        if (p === 5){
            gameWinner.innerText = ('You win!');
        }
        else {
            gameWinner.innerText = ('You lose!');
        }
        roundIndicator.innerText = '';
        scoreBoard.innerText = '';
        playerScore = 0;
        compScore = 0;

    }
}
