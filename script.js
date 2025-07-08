function computerChoiceGenerator() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) return "ROCK";
  else if (randomChoice === 1) return "PAPER";
  else return "SCISSORS";
}

function playRound(event) {
  let computerChoice = computerChoiceGenerator();
  let humanChoice = event.target.name.toUpperCase();
  if (computerChoice === humanChoice)
  {
    addText(`You chose ${humanChoice} and Computer chose ${computerChoice}, so it's a tie!`);
    ++humanScore;
    ++computerScore;
  }
  else if (
    (computerChoice === "ROCK" && humanChoice != "PAPER") ||
    (computerChoice == "SCISSORS" && humanChoice != "ROCK") ||
    (computerChoice == "PAPER" && humanChoice != "SCISSORS")
  ){
      addText(`You chose ${humanChoice} and Computer chose ${computerChoice}, Computer wins this round!`);
    ++computerScore;  }
  else{
      addText(`You chose ${humanChoice} and Computer chose ${computerChoice}, You win this round!`);
    ++humanScore;
  }
  ++count;
  console.log(count);
  if (count === 5)
    document.dispatchEvent(fiveReachedEvent);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playRound);
});

let count=0;
let computerScore = 0;
let humanScore = 0;

const fiveReachedEvent = new Event('fiveReached');

document.addEventListener('fiveReached', ()=>{
  console.log("function exec problem in if",computerScore, humanScore)
  if (computerScore === humanScore)
    addText(`Scores: Computer- ${computerScore} You- ${humanScore}. It's a tie!`);
  else if (computerScore > humanScore)
    addText(`Scores: Computer- ${computerScore} You- ${humanScore}. You lose!`);
  else
    addText(`Scores: Computer- ${computerScore} You- ${humanScore}. You win!`);
  count=0; 
  computerScore = 0;
  humanScore = 0;
});

function addText(text)
{
    const displayMessage = document.createElement('div');
    displayMessage.textContent= text;
    displayMessage.classList.add('displayMessage');

    const body = document.querySelector('body');
    body.appendChild(displayMessage);
}



