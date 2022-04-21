const options =["ROCK", "PAPER", "SCISSORS"];
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)]
    
}
    console.log(options[Math.floor(Math.random()*options.length)]);
    
    function playRound(){
     const playerSelection = playerOption();
     const computerSelection = computerOption();
    }
    
    function playerOption(){
        let answer = prompt("Choose either Rock, Paper, or Scissors");
        while (answer == null){
        answer = prompt("Choose either Rock, Paper, or Scissors");
        }



game();