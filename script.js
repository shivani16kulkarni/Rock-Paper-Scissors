function computerChoicef() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) return "ROCK";
  else if (randomChoice === 1) return "PAPER";
  else return "SCISSORS";
}

function humanChoicef() {
  return prompt("Please enter your choice: Rock, Paper or Scissors");
}

function playRound() {
  let computerChoice = computerChoicef();
  let humanChoice = humanChoicef();
  humanChoice = humanChoice.toUpperCase();
  if (computerChoice === humanChoice) {
    console.log(
      `You chose ${humanChoice} and Computer chose ${computerChoice}, so it's a tie!`
    );
    return "Tie";
  } else if (
    (computerChoice === "ROCK" && humanChoice != "PAPER") ||
    (computerChoice == "SCISSORS" && humanChoice != "ROCK") ||
    (computerChoice == "PAPER" && humanChoice != "SCISSORS")
  ) {
    console.log(
      `You chose ${humanChoice} and Computer chose ${computerChoice}, Computer wins this round!`
    );
    return "computerChoice";
  } else {
    console.log(
      `You chose ${humanChoice} and Computer chose ${computerChoice}, You win this round!`
    );
    return "humanChoice";
  }
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let localWinner;
  for (let i = 0; i < 5; i++) {
    localWinner = playRound();
    if (localWinner === "Tie") {
      ++humanScore;
      ++computerScore;
    } else if (localWinner === "computerChoice") ++computerScore;
    else ++humanScore;
  }
  if (computerScore === humanScore)
    return `Scores: Computer- ${computerScore} You- ${humanScore}. It's a tie!`;
  return computerScore > humanScore
    ? `Scores: Computer- ${computerScore} You- ${humanScore}. You lose!`
    : `Scores: Computer- ${computerScore} You- ${humanScore}. You win!`;
}

let winner = playGame();
console.log(`Game Ended! ${winner}`);
