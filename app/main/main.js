const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')
const { format } = require('url')


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) { mainWindow.webContents.openDevTools() }
  })

  const devPath = 'http://localhost:1124'
  const prodPath = format({
    pathname: resolve('app/renderer/dist/index.html'),
    protocol: 'file:',
    slashes: true
  })
  const url = isDev ? devPath : prodPath

  mainWindow.setMenu(null)
  mainWindow.loadURL(url)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
