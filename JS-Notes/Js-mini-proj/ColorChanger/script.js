const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Set the body's background color to the clicked button's id
        body.style.backgroundColor = e.target.id;
    });
});
