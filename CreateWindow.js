const { BrowserWindow } = require('electron');

function CreateWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 700,
    frame: true,
    titleBarStyle: "Mini Browser Window 😁👍",
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    }
  })

  win.loadURL('http://localhost:4200/');

  return win
}

module.exports = { CreateWindow }