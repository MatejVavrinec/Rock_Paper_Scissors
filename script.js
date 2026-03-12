let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("rock").onclick = () => playGame("rock");
    document.getElementById("paper").onclick = () => playGame("paper");
    document.getElementById("scissors").onclick = () => playGame("scissors");

    document.getElementById("restart").onclick  = restartGame;
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("p1-choice").textContent = playerChoice;
    document.getElementById("p2-choice").textContent = computerChoice;

    let result;

    if (playerChoice === computerChoice) {
        result = "Draw!";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        result = "You Win!";
        playerScore++;
    } else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("winner").textContent = result;
    document.getElementById("score1").textContent = playerScore;
    document.getElementById("score2").textContent = computerScore;

    if(score1 === 5){
document.getElementById("winner").innerText = "Player 1 wins the game!";
}

if(score2 === 5){
document.getElementById("winner").innerText = "Computer wins the game!";
}

}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score1").textContent = "0";
    document.getElementById("score2").textContent = "0";
    document.getElementById("p1-choice").textContent = "-";
    document.getElementById("p2-choice").textContent = "-";
    document.getElementById("winner").textContent = "Choose your move";
}






