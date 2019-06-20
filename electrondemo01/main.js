var electron = require('electron')
const app = electron.app // electron 对象的引用
const BrowserWindow = electron.BrowserWindow // BrowserWindow 类的引用

let mainWindow = null // 监听应用准备完成的事件  app.on('ready', function() {})

// 监听应用准备完成事件
app.on('ready', function() {
  // 创建窗口
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})

// 监听所有窗口关闭事件
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
