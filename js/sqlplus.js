var shell = require('shelljs');
shell.config.execPath = shell.which('node').toString();

function sqlplus() {

    if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
        shell.echo('Error: Git commit failed');
        shell.exit(1);
      }
}

module.exports = sqlplus ;