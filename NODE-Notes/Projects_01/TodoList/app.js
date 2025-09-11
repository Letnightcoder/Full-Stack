import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const todos = [];

const showMenu = () => {
    console.log("\n1. Add Todo");
    console.log("2. View Todos");
    console.log("3. Exit");

    rl.question ("Enter your choice: ", (choice) => {
        switch (choice) {

            case "1":
                rl.question("Enter todo: ", (todo) => {
                    if (todo.length !== 0) {
                        todos.push(todo);
                        console.log("Task added successfully!");
                    } else {
                        console.log("Task cannot be empty!");
                    }
                    showMenu();
                })
                break;

            case "2":
                console.log("\n Your Todos:");

                todos.forEach((todo, index) => {
                    console.log(`${index + 1}. ${todo}`);
                });
                showMenu();
                break;
                
            case "3":
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                showMenu();
                break;
        }
    });
}

showMenu();