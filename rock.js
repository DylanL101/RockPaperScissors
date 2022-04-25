const options =["ROCK", "PAPER", "SCISSORS"]
const winner = []
function computerPick(){
    return options[Math.floor(Math.random()*options.length)]
    
}
function retry ()
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
    function playRound(playerOption)
    let winTwo = winCheck();
    if (winTwo >= 5){
        return;
    }
    
    
    
    function playRound(playerOption){
    
    const computerOption = computerPick();

    const win = winCheck(playerSelection, computerSelection);
    winner.push(win);
    trackWins();
    displayMatch(playerOption,computerOption ,win)
    
    }
     function displayMatch(playerOption,computerOption ,win){
        document.querySelector('.gamerOption').textContent =`You chose : ${playerOption}`;
        document.querySelector('.compOption').textContent =`The computer chose : ${computerOption}`;
        document.querySelector('.ties').textContent =`Number of Ties : ${tie}`;
    
     }
        
    
    function trackWins(){
        let playerWins = winner.filter((item) => item == "Winner!Gagneau! Player has won!").length;
        let computerWins = winner.filter((item) => item == "Computer has won!").length;
        let tie = winner.filter((item) => item == "Tie game").length;
        document.querySelector('.gamerScore').textContent = ` The score is: ${playerWins}`;
        document.querySelector('.compScore').textContent = ` The computer's score is: ${computerWins}`;
        document.querySelector('.ties').textContent = ` Number of Ties: ${tie}`;
    }
    function confirmWin(){
    let playerWins = winner.filter((item) => item == "Winner!Gagneau! Player has won!").length;
    let computerWins = winner.filter((item) => item == "Computer has won!").length;
    let tie = winner.filter((item) => item == "Tie game").length;
     return Math.max(playerWins, computerWins)

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
    
}

    function logMatch(playerOption,computerOption, win,match){
        
    }
}
game();