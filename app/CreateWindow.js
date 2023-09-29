const { BrowserWindow } = require('electron');
const fs = require('fs');

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

  createData();

  return win
}

function createData() {
  const minhaVariavel = process.env.browser;
  const data = JSON.parse(minhaVariavel);
  win.loadURL(data.url);

  console.log(data)
  // try {
  //   var data = fs.readFileSync(__dirname + '/data.json', 'utf8');
  //   const dataJson = JSON.parse(data.toString());
  //   win.loadURL(dataJson.url);
  // } catch (e) {

  // }
}

module.exports = { CreateWindow }