

function computerPlay(){
  let arr = ['Rock', 'Paper', 'Scissors'];
  return arr[Math.floor((Math.random()*3))];
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection){
  playerSelection = capitalize(playerSelection);
  if(playerSelection === 'Rock'){
    switch(computerSelection) {
      case 'Rock': 
        return "Draw Rock Rock";
      case 'Paper':
        return "You Lose! Paper beats Rock";
      case 'Scissors':
        return "You Win! Rock beats Scissors";
        
    }
  }
  else if(playerSelection === 'Paper'){
    switch(computerSelection) {
      case 'Rock':
        return "You Win! Paper beats Rock";
      case 'Paper':
        return "Draw Paper Paper";
      case 'Scissors':
        return "You Lose! Scissors beats Paper";
    }
  }
  else if(playerSelection === 'Scissors'){
    switch(computerSelection) {
      case 'Rock':
        return "You Lose! Rock beats Scissors";
      case 'Paper':
        return "You Win! Scissors beats Paper";
      case 'Scissors':
        return "Draw Scissors Scissors";
    }
  }
}

function game(){
  let myScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 5; i++){
    let userInput = prompt("What's your choice? ");
    let res = playRound(userInput, computerPlay());
    if(res.startsWith('You Win')){
      myScore++;
    }
    else if(res.startsWith('You Lose')){
      computerScore++;
    }
    console.log(res);
  }
  if(myScore > computerScore){
    console.log(`You Win`);
  }
  else if(myScore < computerScore){
    console.log(`You Lose`);
  }
  else{
    console.log(`Draw`);
  }
  console.log(`your final score: ${myScore}, computer's final score: ${computerScore}`);

}

game();