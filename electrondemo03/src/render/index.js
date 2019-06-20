// 渲染进程代码
// 打开新窗口属性用法有点类似 vscode 打开的新窗口
const path = require('path')
const btn = document.querySelector('#btn')
const BrowerWindow = require('electron').remote.BrowserWindow
let win = null

btn.onClick = () => {
  win = new BrowerWindow({
    width: 300,
    height: 200,
    frame: false, // false 隐藏关闭按钮，菜单选项 true 显示
    fullscreen: true, // 全屏展示
    transparent: true
  })
  console.log(__dirname)
  win.loadURL(`file://${__dirname}/new.html`)
  // win.loadURL(path.join('file:', __dirname, 'new.html'))
  win.on('close', () => { win = null })
}
