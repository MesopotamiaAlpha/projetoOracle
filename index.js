const { app, BrowserWindow, shell } = require('electron');
const timezone = require ("./js/timezone");
const sqlplus = require ("./js/sqlplus");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('index.html')
}

//sqlplus();
//timezone();

app.whenReady().then(() => {
  createWindow()
})