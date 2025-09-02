// Import EventEmitter class
const EventEmitter = require("events");
// Create an instance of EventEmitter
const emitter = new EventEmitter();

/*
// 1. Define an event listener (addListener)

emitter.on("greet", () => {
  console.log(`hello Kallol`);
});

// 2. Trigger (emit) the "greet" event

emitter.emit("greet");

*/

/*
//* You can also pass arguments while emitting.

emitter.on("greet", (username, prof) => {
  console.log(`hello ${username}, You are a ${prof}, ri8`);
});

// 2. Trigger (emit) the "greet" event

emitter.emit("greet", "Kallol", "Full Stack Dev");

*/

//! but it's best idea to take a single argument as an object.

emitter.on("greet", (arg) => {
  console.log(`hello ${arg.username}, You are a ${arg.prof}, ri8`);
});

// 2. Trigger (emit) the "greet" event

emitter.emit("greet", { username: "Kallol", prof: "Full Stack Dev" });
