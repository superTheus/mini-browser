const { BrowserWindow } = require('electron');

function CreateWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 700,
    titleBarStyle: "Mini Browser Window 😁👍",
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    }
  })

  win.loadURL('http://localhost:4200/');

  return win
}

module.exports = { CreateWindow }