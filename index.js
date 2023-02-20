/*
Este arquivo é o principal, no momento que o electron vai começar a rodar ele chama tudo deste arquivo
*/

const { app, BrowserWindow, Menu } = require('electron');
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
        submenu: [{ // Adiciona um submenu
                label: `Sobre`,
            }, {
                type: 'separator' // Linha horizontal entre os itens do submenu
            },{
                label: 'Sair',
                role: 'quit' // Fecha o aplicativo quando clicado

            }]
    },
    {
        label: 'Refresh', // Recarrega a pagina quando clicado
        role: 'reload'
    },
    {
        label: 'Importar', // Função que tem que ser escolhida ainda
        role : 'Importar'
    }
]
const menu = Menu.buildFromTemplate (template) // Define o nome menu
Menu.setApplicationMenu (menu)

  win.loadFile('index.html')
}

sqlplus();
//timezone();

app.whenReady().then(() => {
  createWindow()
})