const btn = document.querySelector('#btn')
var path = require('path')
var BrowserWindow = require('electron').remote.BrowserWindow

let win = null

btn.onclick = () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 300,
    height: 200,
    frame: true, // false 隐藏关闭按钮，菜单选项 true 显示、
    // fullscreen: true, // 全屏展示
    // transparent: true // 弹出框透明度
  })
  win.loadURL(path.join('file:', __dirname, 'news.html'))
  win.on('close', () => { win = null })
}
