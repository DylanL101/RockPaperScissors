const options =["ROCK", "PAPER", "SCISSORS"];
function computerOption(){
    return options[Math.floor(Math.random()*options.length)]
    
}
console.log(options[Math.floor(Math.random()*options.length)]);
    function game(){
        playRound();
    }
    
    function playRound(){
    const playerSeletion = playerOption();
    const computerSelection = computerOption();

  
    }
    
    function playerOption(){
        let answer = prompt("Choose either Rock, Paper, or Scissors");
        while (answer == null){
            answer = prompt("Choose either Rock, Paper, or Scissors");
            }
            answer = answer.toUpperCase();
        }
        let check = validateAnswer(answer)
        while (check == false)
            answer = prompt(" Please choose either Rock, Paper, or Scissors. Make sure your spelling is correct.");
        while (answer == null){
            anwer = prompt ("Choose either Rock, Paper, or Scissors");
        }
        answer = answer.toUpperCase();
        check = validateAnswer(answer);

    function  validateAnswer(option){
        if(options.includes(option)){
            return true
        } else {
            return false
        }
    }
    function winCheck (optionP, optionC){
        if (optionP === optionC){
            return "Tie game";
     } else if (optionP === "PAPER" && optionC === "ROCK" || optionP === "ROCK" && optionC === "SCISSORS" || optionP === "SCISSORS" && optionC === "PAPER")
        return "Winner!Gagneau! Player has won!";
        else{
            return "Computer has won!"
        }
        }

    game();