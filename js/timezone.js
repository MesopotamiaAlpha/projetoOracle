/*
Este arquivo não terminei de testar, fique avontade a desenvolver da forma que preferir
texto novo aqui dentro
*/

const { exec } = require("child_process");


function timezone() {
    exec("select * from all_directories; > log2.txt", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = timezone ;