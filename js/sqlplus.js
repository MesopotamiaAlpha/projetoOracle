const { exec } = require("child_process");


function sqlplus() {
    exec("sqlplus viasoft/viasoftmcp as sysdba > Log1.txt", (error, stdout, stderr) => {
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