// DOM Elements
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const choices = document.querySelectorAll(".choice");
const resetButton = document.getElementById("reset-button");

// Game Variables
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

// Event Listeners
choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    // Remove selected class from all choices
    choices.forEach((c) => c.classList.remove("selected"));

    // Add selected class to clicked choice
    this.classList.add("selected");

    // Get player choice
    playerChoice = this.id;

    // Get computer choice
    computerChoice = getComputerChoice();

    // Determine winner
    const result = determineWinner(playerChoice, computerChoice);

    // Update score
    updateScore(result);

    // Display result
    displayResult(result, playerChoice, computerChoice);
  });
});

// Reset button event listener
resetButton.addEventListener("click", resetGame);

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Determine winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }

  return "lose";
}

// Update score
function updateScore(result) {
  if (result === "win") {
    playerScore++;
    playerScoreElement.textContent = playerScore;
  } else if (result === "lose") {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }
}

// Display result
function displayResult(result, playerChoice, computerChoice) {
  const capitalizedPlayerChoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  const capitalizedComputerChoice =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  if (result === "win") {
    resultText.textContent = `You win! ${capitalizedPlayerChoice} beats ${capitalizedComputerChoice}`;
    resultText.style.color = "green";
  } else if (result === "lose") {
    resultText.textContent = `You lose! ${capitalizedComputerChoice} beats ${capitalizedPlayerChoice}`;
    resultText.style.color = "red";
  } else {
    resultText.textContent = `It's a tie! Both chose ${capitalizedPlayerChoice}`;
    resultText.style.color = "#2c3e50";
  }
}

// Reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  resultText.textContent = "Choose your move!";
  resultText.style.color = "#2c3e50";

  // Remove selected class from all choices
  choices.forEach((choice) => choice.classList.remove("selected"));
}
