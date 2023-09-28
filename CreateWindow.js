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

  win.loadURL('https://chat.openai.com');

  return win
}

module.exports = { CreateWindow }