const options =["ROCK", "PAPER", "SCISSORS"]
const winner = []
function computerOption(){
    return options[Math.floor(Math.random()*options.length)]
    
}

    function game(){
        for (let i= 0; i<= 5; i++){
            playRound(i);
        }
        logWins();
    }
    
    function playRound(match){
    const playerSelection = playerOption();
    const computerSelection = computerOption();

    const win = winCheck(playerSelection, computerSelection);
    winner.push(win);
    logMatch(playerSelection,computerSelection, win, match);
    }
    
    function playerOption(){
        let answer = prompt("Choose either Rock, Paper, or Scissors");
        while (answer == null){
            answer = prompt("Choose either Rock, Paper, or Scissors");
            }
        answer = answer.toUpperCase();
        let check = validateAnswer(answer)
        while (check == false){
            answer = prompt(" Please choose either Rock, Paper, or Scissors. Make sure your spelling is correct.");
        while (answer == null){
            answer = prompt ("Choose either Rock, Paper, or Scissors");
        }
        answer = answer.toUpperCase()
        check = validateAnswer(answer);
    }
        return answer;
}
    function  validateAnswer(option){
        return options.includes(option);
           
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
    let playerWins = winner.filter((item) => item == "Player").length;
    let computerWins = winner.filter((item) => item == "Computer").length;
    let tie = winner.filter((item) => item == "Ties").length;
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

game();