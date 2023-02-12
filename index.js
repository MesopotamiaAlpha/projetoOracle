const { app, BrowserWindow, shell } = require('electron');

const sqlplus = require ("./js/sqlplus");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('index.html')
}

sqlplus();

app.whenReady().then(() => {
  createWindow()
})