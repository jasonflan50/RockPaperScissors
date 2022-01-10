function computerPlay() {
    const moves = ["Rock", "Paper", "Scissor"];
    const int = Math.floor(Math.random() * moves.length);

    return moves[int];
}

console.log(computerPlay())