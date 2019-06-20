// 渲染进程
let send = document.querySelector('#send')
const { ipcRenderer } = require('electron')

send.onclick = () => {
  // 传递消息给主进程
  // 异步
  ipcRenderer.send('sendMsg', { name: 'poetries', age: 23 })
}
