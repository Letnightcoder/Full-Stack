const boxConfig = [
  {color: "red", width: "33.33%"},
  {color: "green", width: "33.33%"},
  {color: "blue", width: "33.33%"},
  {color: "yellow", width: "50%"},
  {color: "orange", width: "50%"},
  {color: "purple", width: "70%"},
  {color: "pink", width: "30%"},
];

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

function renderBoxes() {
  container.innerHTML = ""; // Clear existing boxes before re-rendering
  boxConfig.forEach((config) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = config.color;
    box.style.width = config.width;
    container.appendChild(box);
  });
}

container.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("box")) {
    const index = Array.from(container.children).indexOf(clickedElement);
    const config = boxConfig[index];
    alert(`Color of box ${index + 1} is ${config.color}`);
  }
});

// 👇 -------------- Assignment Solution -------------- 👇

renderBoxes(); // Initial render

document.getElementById("boxForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const color = document.getElementById("colorInput").value;
  let width = document.getElementById("widthInput").value; // Get width as number
  width = width ? `${width}%` : "100%"; // Default to 100% if width is not specified

  // Add the new box config
  boxConfig.push({color, width});

  // Re-render boxes
  renderBoxes();

  // Optionally, clear the form fields
  document.getElementById("colorInput").value = "#ffffff"; // Reset to white or any default color
  document.getElementById("widthInput").value = "";
});
