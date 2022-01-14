const OPTIONS = ["rock","paper","scissor"];
let player;
let computer;
let win_player = 0;
let win_computer = 0;
let tied=0;


/*/* Function for Computer selection */
function computerSelection(){
    let computerChoice;
    computerChoice = Math.floor((Math.random()*3))
    if (computerChoice === 0){
        computerChoice = OPTIONS[0];
    }else if(computerChoice === 1){
        computerChoice = OPTIONS[1];
    }else {
        computerChoice = OPTIONS[2];
    };
    return computerChoice;
}

/* Function for Player Selection */
function playerSelection(){
    let playerChoice;
    playerChoice = prompt("Enter your choice, Rock,Paper, scissor","");
    playerChoice = playerChoice.toLowerCase();
    if (OPTIONS.indexOf(playerChoice) == -1){
       console.log("Player entered invalid option")
    }
    return playerChoice;
}

/* Function to play one round of game */
function playround(computer,Player){

    computer = computerSelection()
    player = playerSelection() 

    if (computer == "rock" && player == "rock") {
        console.log("Both selected rock, match tied!!");
        tied += 1;
    } else if (computer == "rock" && player == "paper") {
        console.log("The Computer selected rock, Player selected paper. Player Wins");
        win_player += 1;
    } else if (computer == "rock" && player === "scissor") {
        console.log("The Computer selected rock, Player selected scissor. Computer Wins");
        win_computer += 1;
    };

    if (computer == "paper" && player == "paper") {
        console.log("Both selected paper, match tied!!");
        tied += 1;
    } else if (computer == "paper" && player == "rock") {
        console.log("The Computer selected paper, Player selected rock. Computer Wins");
        win_computer += 1;
    } else if (computer == "paper" && player == "scissor") {
        console.log("The Computer selected paper, Player selected scissor. Player Wins");
        win_player += 1;
    };

    if (computer == "scissor" && player == "scissor") {
        console.log("Both selected scissor, match tied!!");
        tied += 1;
    } else if (computer == "scissor" && player == "paper") {
        console.log("The Computer selected scissor, Player selected paper. Computer Wins");
        win_computer += 1;
    } else if (computer == "scissor" && player == "rock") {
        console.log("The Computer selected scissor, Player selected rock. Player Wins");
        win_player += 1;
    };
}
function playgame(n){
    let games = n;
    for (let i=1;i<=games;i++){
        console.log(`Match ${i}`)
        playround(computer,player); 
    }
    if(win_computer > win_player){
        console.log(`The computer won by winning ${win_computer} games in total ${games} games. ${tied} games tied `);
    }else if(win_player > win_computer) {
        console.log(`The player won by winning ${win_player} games in total ${games} games. ${tied} games tied`);
    }else{
        console.log(`Both won ${win_computer} games each in total ${games} games. ${tied} games tied`);
    }
}
console.log("Welcome to Rock, Paper, Scissor Game")
number_of_matches = prompt("Enter the number of matches","5");
console.log(`Number of matches : ${number_of_matches}`)
playgame(number_of_matches);