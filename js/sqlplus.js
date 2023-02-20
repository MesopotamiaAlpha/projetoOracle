/*
Este arquivo é destinado a fazer a conexão ao sqlplus, o material de apoio que estou usando está dentro do readme do site stackabuse
*/
const { exec } = require("child_process");

function sqlplus() {

  exec("dir", (error, stdout, stderr) => {
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

module.exports = sqlplus ;