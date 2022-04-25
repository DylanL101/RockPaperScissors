const options =["ROCK", "PAPER", "SCISSORS"]
const winner = []
function computerPick(){
    return options[Math.floor(Math.random()*options.length)]
    
}
function retry(){
    winner =[]
    document.querySelector('.gamerScore').textContent = "The score is : 0";
    document.querySelector('.compScore').textContent = "The computer's score is : 0";
    document.querySelector('.ties').textContent = "Number of Ties : 0";
    document.querySelector('.winner').textContent = "";
    document.querySelector('.gamerOption').textContent = "";
    document.querySelector('.compOption').textContent = "";
    document.querySelector('retry').style.display = "none";
    
    
    
    

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

    }
    function playRound(playerOption){
    let winTwo = confirmWin();
    if (winTwo >= 5){
        return;
    }
}
    
    
    function playRound(playerOption){
    
    const computerOption = computerPick();

    const win = winCheck(playerOption, computerOption);
    winner.push(win);
    trackWins();
    displayMatch(playerOption,computerOption ,win)
    winTwo = confirmWin();
    if (winTwo == 5){
        endMatch();
    }
    
    
    }
    function endMatch(){
        let pWins = winner.filter((item) => item == "Player has won!").length;
            if (pWins == 5){
                document.querySelector('.winner').textContent = "You won the 5 Matches!";
            }else {
                document.querySelector('.winner').textContent = "The computer won 5 Matches!"
            }
            document.querySelector('.retry').style.display = "flex";

    }
     function displayMatch(playerOption,computerOption ,win){
        document.querySelector('.gamerOption').textContent =`You chose : ${playerOption}`;
        document.querySelector('.compOption').textContent =`The computer chose : ${computerOption}`;
        document.querySelector('.winner').textContent = `The winner is: ${win}`;
    
     }
        
    
    function trackWins(){
        let playerWins = winner.filter((item) => item == "Player has won!").length;
        let computerWins = winner.filter((item) => item == "Computer has won!").length;
        let tie = winner.filter((item) => item == "Tie game").length;
        document.querySelector('.gamerScore').textContent = ` The score is: ${playerWins}`;
        document.querySelector('.compScore').textContent = ` The computer's score is: ${computerWins}`;
        document.querySelector('.ties').textContent = ` Number of Ties: ${tie}`;
    }
    function confirmWin(){
    let playerWins = winner.filter((item) => item == "Player has won!").length;
    let computerWins = winner.filter((item) => item == "Computer has won!").length;
    let tie = winner.filter((item) => item == "Tie game").length;
     return Math.max(playerWins, computerWins)

    }
    
    
    
    function winCheck (optionP, optionC){
        if (optionP === optionC){
            return "Tie game";
     } else if ((optionP == "PAPER" && optionC == "ROCK") || (optionP == "ROCK" && optionC == "SCISSORS") || (optionP == "SCISSORS" && optionC === "PAPER")){
        return "Player has won!";
     } else{
            return "Computer has won!";
     }
 }
 function logWins(){
    let playerWins = winner.filter((item) => item == "Player has won!").length;
    let computerWins = winner.filter((item) => item == "Computer has won!").length;
    let tie = winner.filter((item) => item == "Tie game").length;
    
}

   
game();