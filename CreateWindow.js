const { BrowserWindow } = require('electron');

function CreateWindow() {
  win = new BrowserWindow({
    width: 1500,
    height: 1300,
    transparent: true,
    frame: true,
    titleBarStyle: "Mini Browser Window 😁👍",
    alwaysOnTop: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('https://github.com/orgs/Logictec/projects/1')

  return win
}

module.exports = { CreateWindow }