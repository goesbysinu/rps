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

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock!")
        }
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock crushes Scissors!")
        }
        if (humanChoice === "rock" && computerChoice === "rock") {
            humanScore++;
            computerChoice++;
            console.log("Its a tie");
        }

        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissor cuts Paper")
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock crushes Scissors!")
        }
        if (humanChoice === "scissors" && computerChoice === "scissors") {
            computerScore++;
            humanScore++;
            console.log("Its a tie!")
        }

        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock!")
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors cuts Paper!")
        }
        if (humanChoice === "paper" && computerChoice === "paper") {
            computerScore++;
            humanScore++;
            console.log("Its a tie!")
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("Congrats! You win the game!")
    } else if (computerScore > humanScore) {
        console.log("You lose! Better luck next time!")
    } else {
        console.log("None is victorius! Please play again!")
    }
}

playGame();