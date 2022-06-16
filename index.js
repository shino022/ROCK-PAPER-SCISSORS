

function computerPlay(){
  let arr = ['Rock', 'Paper', 'Scissors'];
  return arr[Math.floor((Math.random()*3))];
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(e){
  const text = document.createElement('div');
  const container = document.querySelector('.container');
  const computerSelection = computerPlay();
  const playerSelection = capitalize(e.srcElement.getAttribute('class'));

  if(playerSelection === 'Rock'){
    switch(computerSelection) {
      case 'Rock': 
        text.textContent = "Draw Rock Rock";
        break;
      case 'Paper':
        text.textContent = "You Lose! Paper beats Rock";
        break;
      case 'Scissors':
        text.textContent = "You Win! Rock beats Scissors";
        break;
        
    }
  }
  else if(playerSelection === 'Paper'){
    switch(computerSelection) {
      case 'Rock':
        text.textContent = "You Win! Paper beats Rock";
        break;
      case 'Paper':
        text.textContent = "Draw Paper Paper";
        break;
      case 'Scissors':
        text.textContent = "You Lose! Scissors beats Paper";
        break;
    }
  }
  else if(playerSelection === 'Scissors'){
    switch(computerSelection) {
      case 'Rock':
        text.textContent = "You Lose! Rock beats Scissors";
        break;
      case 'Paper':
        text.textContent = "You Win! Scissors beats Paper";
        break;
      case 'Scissors':
        text.textContent = "Draw Scissors Scissors";
        break;
    }
  }
  container.appendChild(text);
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


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));