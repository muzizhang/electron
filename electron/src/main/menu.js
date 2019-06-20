const { Menu } = require('electron').remote
let menus = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建文件',
        accelerator: 'ctrl+n', // 绑定快捷键
        click: function() {
          console.log('新建文件')
        }
      },
      {
        label: '新建窗口',
        click: function() {
          console.log('新建窗口')
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '复制',
        role: 'copy'
      },
      {
        label: '剪切',
        role: 'cut'
      }
    ]
  },
  {
    label: '视图',
    submenu: [
      {
        label: '浏览'
      },
      {
        label: '搜索'
      }
    ]
  }
]

let m = Menu.buildFromTemplate(menus)
Menu.setApplicationMenu(m)
