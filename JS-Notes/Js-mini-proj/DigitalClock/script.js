const clock = document.getElementById("clock");
let date = new Date();
// Log the current time to the console in a human-readable format (HH:MM:SS AM/PM)
console.log(date.toLocaleTimeString());
// Use `setInterval` to repeatedly execute a function every 1000 milliseconds (1 second)
setInterval(function() {
    // Update the `date` object to the current date and time
    date = new Date();
    // Log the updated current time to the console
    console.log(date.toLocaleTimeString());
    // Update the innerHTML of the "clock" element to display the current time
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // The interval is set to 1 second (1000 milliseconds)
