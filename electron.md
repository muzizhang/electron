# Electron

C:\Users\z100068\AppData\Local\Google\Chrome\User Data\Default\Extensions\nhdogjmejiglipccpnnnanhbledajbpd\5.1.0_0

## Electron 运行的流程

1. package.json
   1. Define your app's starting point.
2. main.js
   1. Spin up your app's and create a Renderer Process.
3. index.html
   1. Layout and style your app's interface.
4. Use IPC to do tasks in and get info from Main Process.

### Electron 主进程和渲染进程

- electron 运行的 `package.json` 的 main 脚本的进程被称为主线程
- Chromium 的 多线程架构
- 主进程使用 `BrowserWindow` 实例创建页面。每个 `browserWindow` 实例都在自己的渲染进程里运行页面。当一个 `BrowserWindow` 实例被销毁后，相应的渲染进程也会被终止。

**进程和线程的关系：**

1. 进程： 进程是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的一个基本单位，是操作系统结构的基础。
2. 线程：在一个程序里的一个执行路线就叫做线程。（线程是一个进程内部的控制序列）
3. `一个程序至少有一个进程，一个进程至少有一个线程`
   1. （一个进程可以有多个线程，一个程序可以有多个进程）

#### remote 模块

> remote 模块提供了一种在渲染进程（网页）和主进程之间进行通讯（IPC）的简便途径。

## 进程通信

（渲染进程[ipcRenderer]、主进程[ipcMain]），两者都可以使用的模块[nativeImage]

#### 主进程和渲染进程之间的通信

> 在渲染进程中通过一个事件去执行主进程里的方法。或在渲染进程中通知主进程处理事件，主进程处理完后广播一个事件让渲染进程去处理一些事情。（故主进程和渲染进程之间的相互通信）

- `ipcMain`:  当在主进程中使用时，处理从渲染器进程（网页）发送出来的异步和同步信息，(也有可能从主进程向渲染进程发送消息)
- `ipcRenderer`： 使用它提供的一些方法从渲染进程（web 页面）发送同步或异步的消息到主进程。(也可以接收主进程回复的消息)

##### 渲染进程给主进程发送异步消息

> 间接实现渲染进程执行主进程里的方法













# 问题

在除主进程的入口文件中引入，require 文件，不会进行报错，其余文件都会报错。

错误信息：

**require is not define**

解决办法：

~~~js
new BrowserWindow({
    webPreferences: {
        nodeIntegration: true
    }
})
~~~

