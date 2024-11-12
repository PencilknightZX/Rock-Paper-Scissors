
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

function getHumanChoice(){
    let choice = prompt("Choose Between: Rock, Paper or Scissors");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice, rounds) {
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "rock":
                return console.log(`Round ${rounds}: Tie`);
            case "paper":
                computerScore++;
                return console.log(`Round ${rounds}: You lose!, Paper beats Rock`);
            case "scissors":
                humanScore++;
                return console.log(`Round ${rounds}: You Win!, Rock beats Scissors`);
        }
    }
    else if(humanChoice === "paper"){
        switch(computerChoice){
            case "rock":
                return console.log(`Round ${rounds}: You Win!, Paper wraps Rock`);
            case "paper":
                return console.log(`Round ${rounds}: Tie`);
            case "scissors":
                return console.log(`Round ${rounds}: You Lose!, Scissors cuts Paper`);
        }
    }
    else if(humanChoice === "scissors"){
        switch(computerChoice){
            case "rock":
                computerScore++
                return console.log(`Round ${rounds}: You Lose!, Rock breaks Scissors`);
            case "paper":
                humanScore++
                return console.log(`Round ${rounds}: You Win!, Scissors cuts Paper`);
            case "scissors":
                return console.log(`Round ${rounds}: Tie`);
        }
    }
}
 
function playGame(){
    console.log("GAME START!")

    for(let i = 1; i < 6; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, i);
    }
    if(humanScore > computerScore){
        console.log("You Win The Game! :D");
    }
    else if(humanScore < computerScore){
        console.log("You Lost The Game! :(");
    }
    else{
        console.log("No One Wins");
    }
    rounds, computerScore , humanScore = 0;

}

playGame();

