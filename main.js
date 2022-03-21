const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;
let mainWindow;
app.on('ready', function () {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});


const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'add item'
            },
            {
                label: 'clear item'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'command+Q' : 'ctrl+Q',
                onclick() {
                    app.quit();
                }
            }
        ]
    }
];