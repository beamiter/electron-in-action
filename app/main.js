const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () => {
    console.log('hello from electron');
    console.log(__dirname);
    mainWindow = new BrowserWindow();
    mainWindow.webContents.loadFile('app/index.html');
});