const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const changeBtn = document.getElementById("change");
const colorCodeElement = document.getElementById("colorCode");

let intervalId = null;

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCodeElement.textContent = newColor;
}

// Event listener for the Start button
startBtn.addEventListener("click", function () {
  if (intervalId === null) {
    // Only start if not already running
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
});

// Event listener for the Stop button
stopBtn.addEventListener("click", function () {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

// Event listener for the Change button
changeBtn.addEventListener("click", function () {
  changeBackgroundColor();
});
// Initialize with the default color
//The text would still show "#437285" (as set in your HTML), but this wouldn't match the actual background color
document.addEventListener("DOMContentLoaded", function () {
  const initialColor = "#435285";
  document.body.style.backgroundColor = initialColor;
  colorCodeElement.textContent = initialColor;
});
