const { app, BrowserWindow, shell, Menu } = require('electron');
const timezone = require ("./js/timezone");
const sqlplus = require ("./js/sqlplus");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  const template = [
    {
        label: 'Ajuda',
        submenu: [{ // adds submenu
                label: `Sobre`,
            }, {
                type: 'separator' // horizontal line between submenu items
            },{
                label: 'Sair',
                role: 'quit' // closes app when clicked  

            }]
    },
    {
        label: 'Refresh', // Refreshes or reloads the page when clicked
        role: 'reload'
    },
    {
        label: 'Importar', // zooms the page when clicked
        role : 'Importar'
    }
]
const menu = Menu.buildFromTemplate (template) // sets the menu
Menu.setApplicationMenu (menu)

  win.loadFile('index.html')
}

//sqlplus();
//timezone();

app.whenReady().then(() => {
  createWindow()
})