function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return "rock";
    }
    if (random == 1) {
        return "paper";
    }
    if (random == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const roundResultDiv = document.querySelector("#roundResult");
    const scoreDiv = document.querySelector("#score");
    const winnerDiv = document.querySelector("#winner");

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            roundResultDiv.textContent = "Its a tie";
            scoreDiv.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        } else if ((humanChoice === "rock" && computerChoice === "scissors")
                || (humanChoice === "scissors" && computerChoice === "paper")
                || (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            roundResultDiv.textContent = `You win! ${humanChoice.toUpperCase()} crushes ${computerChoice.toUpperCase()}!`;
            scoreDiv.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            computerScore++;
            roundResultDiv.textContent = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
            scoreDiv.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        }

        if (humanScore === 5) {
            winnerDiv.textContent = `Congrats! You win!`;
            rockBtn.removeEventListener("click", eventHandler);
            paperBtn.removeEventListener("click", eventHandler);
            scissorsBtn.removeEventListener("click", eventHandler);
        }

        if (computerScore === 5) {
            winnerDiv.textContent = `You lose! Better luck next time!`;
            rockBtn.removeEventListener("click", eventHandler);
            paperBtn.removeEventListener("click", eventHandler);
            scissorsBtn.removeEventListener("click", eventHandler);
        }
    }

    const rockBtn = document.querySelector(".rock-btn");
    const paperBtn = document.querySelector(".paper-btn");
    const scissorsBtn = document.querySelector(".scissors-btn");
    function eventHandler (e) {
        playRound(e.target.textContent.toLowerCase(), getComputerChoice());
    }

    rockBtn.addEventListener("click", eventHandler);
    paperBtn.addEventListener("click", eventHandler);
    scissorsBtn.addEventListener("click", eventHandler);
}

playGame();