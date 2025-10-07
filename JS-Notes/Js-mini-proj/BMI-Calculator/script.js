document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const calculateBtn = document.getElementById("calculate-btn");
  const bmiValue = document.getElementById("bmi-value");
  const bmiStatus = document.getElementById("bmi-status");
  const resultDiv = document.getElementById("result");

  // Add event listener to the calculate button
  calculateBtn.addEventListener("click", calculateBMI);

  // Add event listeners for Enter key press
  heightInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      weightInput.focus();
    }
  });

  weightInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      calculateBMI();
    }
  });

  // Function to calculate BMI
  function calculateBMI() {
    // Get height and weight values
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      showError("Please enter valid height and weight values");
      return;
    }

    // Calculate BMI: weight (kg) / (height (m))^2
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI value (rounded to 1 decimal place)
    bmiValue.textContent = bmi.toFixed(1);

    // Determine BMI status
    let status = "";
    let statusColor = "";

    if (bmi < 18.5) {
      status = "Underweight";
      statusColor = "#2196F3"; // Blue
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Normal weight";
      statusColor = "#4CAF50"; // Green
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight";
      statusColor = "#FF9800"; // Orange
    } else {
      status = "Obesity";
      statusColor = "#F44336"; // Red
    }

    // Display BMI status
    bmiStatus.textContent = status;
    bmiStatus.style.color = statusColor;

    // Show result with animation
    resultDiv.style.display = "block";
    resultDiv.classList.add("show-result");

    // Remove animation class after animation completes
    setTimeout(() => {
      resultDiv.classList.remove("show-result");
    }, 1000);
  }

  // Function to show error message
  function showError(message) {
    bmiValue.textContent = "--";
    bmiStatus.textContent = message;
    bmiStatus.style.color = "#F44336"; // Red
    resultDiv.style.display = "block";
  }
});
