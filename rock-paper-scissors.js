
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// function getHumanChoice(){
//     let choice = prompt("Choose Between: Rock, Paper or Scissors");
//     return choice.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "rock":
                return `Tie`;
            case "paper":
                computerScore++;
                return `You lose!, Paper beats Rock`;
            case "scissors":
                humanScore++;
                return `You Win!, Rock beats Scissors`;
        }
    }
    else if(humanChoice === "paper"){
        switch(computerChoice){
            case "rock":
                humanScore++;
                return `You Win!, Paper wraps Rock`;
            case "paper":
                return `Tie`;
            case "scissors":
                computerScore++;
                return `You Lose!, Scissors cuts Paper`;
        }
    }
    else if(humanChoice === "scissors"){
        switch(computerChoice){
            case "rock":
                computerScore++
                return `You Lose!, Rock breaks Scissors`;
            case "paper":
                humanScore++
                return `You Win!, Scissors cuts Paper`;
            case "scissors":
                return `Tie`;
        }
    }
}
 
function playGame(humanChoice){
    const compChoice = getComputerChoice();
    result.textContent = `Scoreboard: You: ${humanScore}, CPU: ${computerScore}
    ${playRound(humanChoice, compChoice)}`;
    
    if(humanScore == 5){
        result.textContent = `Scoreboard: You: ${humanScore}, CPU: ${computerScore}
        Congrats! You Win The Game :D`;
        computerScore = 0 
        humanScore = 0;
    }
    else if(computerScore == 5){
        result.textContent = `Scoreboard: You: ${humanScore}, CPU: ${computerScore}
        CPU Won, You Lost :(`;
        computerScore = 0 
        humanScore = 0;
    }
}

const rock = document.createElement("button");
rock.textContent = "ROCK";

const paper = document.createElement("button");
paper.textContent = "PAPER";

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";

const result = document.createElement("div");
result.style.cssText = "border: 2px solid black; background-color: grey; width: 11%; height: 200px";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(result);

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});


