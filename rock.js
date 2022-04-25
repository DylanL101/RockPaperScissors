const options =["ROCK", "PAPER", "SCISSORS"]
const winner = []
function computerOption(){
    return options[Math.floor(Math.random()*options.length)]
    
}
function game(){
   
    const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (button.id){
                    playRound(button.id);
                    
                }
            });
        });


    function playRound(playerOption)
    let winTwo = winCheck();
    if (winTwo >= 5){
        return;
    }
    
    
    
    function playRound(playerOption){
    const playerSelection = playerOption();
    const computerSelection = computerOption();

    const win = winCheck(playerSelection, computerSelection);
    winner.push(win);
    logMatch(playerSelection,computerSelection, win, match);
    }
    
    
    
    function winCheck (optionP, optionC){
        if (optionP === optionC){
            return "Tie game";
     } else if ((optionP === "PAPER" && optionC === "ROCK") || (optionP === "ROCK" && optionC === "SCISSORS") || (optionP === "SCISSORS" && optionC === "PAPER")){
        return "Winner!Gagneau! Player has won!";
     } else{
            return "Computer has won!";
     }
 }
 function logWins(){
    let playerWins = winner.filter((item) => item == "Winner!Gagneau! Player has won!").length;
    let computerWins = winner.filter((item) => item == "Computer has won!").length;
    let tie = winner.filter((item) => item == "Tie game").length;
    console.log("Result");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", tie);
}

    function logMatch(playerOption,computerOption, win,match){
        console.log("Match:", match);
        console.log("Player Option", playerOption);
        console.log("Computer Option", computerOption);
        console.log( win, "Won the Match");
        
    }
}
game();