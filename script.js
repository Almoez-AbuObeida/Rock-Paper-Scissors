/* let computer choose one of three (paper, rock, scissors)
    * make a functoin to choose.
    * set a variable to the returned value from the function.
    */
function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    return options[(Math.floor(Math.random()*options.length))];
} 
/* ask the user to inter a choice
    * make a variable and assign it to the value prompted.
    * make a while loop that ask the user to inter a valid choice.
    */

//make the game rule function an let it return winner
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "player";
        }
        else {
            return "computer"
        }
    }
  }
// set variables for player and computer count
let playerPoints = 0;
let computerPoints = 0;
console.log(playerPoints);
console.log(computerPoints);
//let the game iterate odd time let it be 5 for now to choose how won.
for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerchoice = prompt("Enter your choice: ");
    while(playerchoice.toLowerCase() !== "rock" && playerchoice.toLowerCase() !== "paper" && playerchoice.toLowerCase() !== "scissors") {
    playerchoice = prompt("Invalid input, enter a valid choice: ");
    }
    let playerChoice = playerchoice.toLowerCase();
    console.log(playerChoice);
    if (playRound(playerChoice, computerChoice) === "player") {
        playerPoints++;
        console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    }
    else if (playRound(playerChoice, computerChoice) === "computer") {
        computerPoints++;
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    }
    else {
        console.log("tie");
    }
}
//who wins more is the winner.
if (playerPoints > computerPoints) {
    console.log(`You won this time`);
}
else {
    console.log(`You lost! try again`)
}