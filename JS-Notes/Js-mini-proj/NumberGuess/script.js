// Game variables
let randomNumber;
let attempts = 0;
let previousGuesses = [];
let gameOver = false;

// DOM elements
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const resetBtn = document.getElementById("reset-btn");
const message = document.getElementById("message");
const guessesList = document.getElementById("guesses-list");
const attemptsCount = document.getElementById("attempts-count");

// Initialize the game
function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  previousGuesses = [];
  gameOver = false;

  // Reset UI
  guessInput.disabled = false;
  guessBtn.disabled = false;
  message.textContent = "Make your first guess!";
  message.style.color = "#333";
  guessesList.textContent = "";
  attemptsCount.textContent = "0";
  guessInput.value = "";
  guessInput.focus();

  console.log("Secret number:", randomNumber); // For debugging
}

// Check the player's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    message.style.color = "orange";
    guessInput.value = "";
    guessInput.focus();
    return;
  }

  // Game is over, don't process more guesses
  if (gameOver) {
    return;
  }

  // Update attempts and previous guesses
  attempts++;
  attemptsCount.textContent = attempts;
  previousGuesses.push(userGuess);
  guessesList.textContent = previousGuesses.join(", ");

  // Check if guess is correct
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
    message.style.color = "green";
    endGame(true);
  } else {
    // Provide feedback
    const difference = Math.abs(userGuess - randomNumber);
    let feedback = userGuess < randomNumber ? "Too low! " : "Too high! ";

    // Add hint based on how close they are
    if (difference <= 5) {
      feedback += "You're very close!";
    } else if (difference <= 10) {
      feedback += "You're getting closer!";
    } else if (difference <= 20) {
      feedback += "You're still a bit off.";
    } else {
      feedback += "You're far away.";
    }

    message.textContent = feedback;
    message.style.color = "#333";

    // Check if max attempts reached (10 attempts)
    if (attempts >= 10) {
      message.textContent = `Game over! The number was ${randomNumber}. Try again!`;
      message.style.color = "red";
      endGame(false);
    }
  }

  guessInput.value = "";
  guessInput.focus();
}

// End the game
function endGame(won) {
  gameOver = true;
  guessInput.disabled = true;
  guessBtn.disabled = true;
}

// Event listeners
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", initGame);

// Allow Enter key to submit guess
guessInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});

// Initialize the game when the page loads
window.addEventListener("load", initGame);
