import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileCreation = () => {
    rl.question("Enter your filename: ", (filename) => {
        rl.question("Enter your content: ", (content) =>{
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.error(`Error creating file: , ${err.message}`);
                }else{
                    console.log(`File "${filename}.txt" created successfully!`);
                }
            });
            rl.close();
        })
    })
}

fileCreation()