// 主进程
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null


const createWindow = () => {
  // 创建菜单
  // 引入菜单模块
  require('./main/ipcMain.js')
}

function createWindow() {
  // 创建一个新的浏览器窗口
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 1104,
    height: 620
  })
  // 装载应用的 index.html 页面
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // 打开开发工具页面
  mainWindow.webContents.openDevTools()
  // require('./main/menu.js')
  // 当窗口关闭时调用的方法
  mainWindow.on('closed', () => {
    // 解除窗口对象的引用
    mainWindow = null
  })
}
// 监听应用准备完成的事件
app.on('ready', createWindow)

// 当所有的窗口被关闭后退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
