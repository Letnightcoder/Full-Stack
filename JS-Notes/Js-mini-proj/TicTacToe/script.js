document.addEventListener("DOMContentLoaded", () => {
  // Game state variables
  let gameActive = true;
  let currentPlayer = "X";
  let gameState = ["", "", "", "", "", "", "", "", ""];

  // Winning combinations
  const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];

  // Status messages
  const statusDisplay = document.getElementById("status");
  const winningMessage = () => `Player ${currentPlayer} has won!`;
  const drawMessage = () => `Game ended in a draw!`;
  const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;

  // Set initial status message
  statusDisplay.textContent = currentPlayerTurn();

  // Handle cell click
  function handleCellClick(clickedCellEvent) {
    // Get the clicked cell
    const clickedCell = clickedCellEvent.target;

    // Get the index of the clicked cell
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute("data-cell-index")
    );

    // Check if the cell is already played or if the game is not active
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
      return;
    }

    // Update game state and UI
    handleCellPlayed(clickedCell, clickedCellIndex);

    // Check for win or draw
    handleResultValidation();
  }

  // Update game state and UI after a cell is played
  function handleCellPlayed(clickedCell, clickedCellIndex) {
    // Update game state
    gameState[clickedCellIndex] = currentPlayer;

    // Update UI
    clickedCell.textContent = currentPlayer;

    // Add class for styling
    clickedCell.classList.add(currentPlayer.toLowerCase());
  }

  // Check for win or draw
  function handleResultValidation() {
    let roundWon = false;

    // Check all winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      const condition =
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c];

      if (condition) {
        roundWon = true;
        break;
      }
    }

    // If there's a winner
    if (roundWon) {
      statusDisplay.textContent = winningMessage();
      gameActive = false;
      return;
    }

    // Check for draw
    const roundDraw = !gameState.includes("");
    if (roundDraw) {
      statusDisplay.textContent = drawMessage();
      gameActive = false;
      return;
    }

    // If no winner and no draw, switch player
    handlePlayerChange();
  }

  // Switch player
  function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.textContent = currentPlayerTurn();
  }

  // Restart game
  function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.textContent = currentPlayerTurn();

    // Clear the board
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o");
    });
  }

  // Add event listeners
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  document
    .getElementById("restart")
    .addEventListener("click", handleRestartGame);
});
