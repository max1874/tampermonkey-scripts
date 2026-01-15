# Tampermonkey Scripts

我的油猴脚本集合。

## 脚本列表

### Google Authuser Auto Switcher

自动为 Google 相关网站添加 `authuser` 参数，确保使用指定的账号登录。

**[点击安装](https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/google-authuser-auto/google-authuser-auto.user.js)** | [查看说明](scripts/google-authuser-auto/README.md)

## 安装方法

### 方法 1：一键安装（推荐）

1. 确保已安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击上面的"点击安装"链接
3. 在弹出的页面点击"安装"按钮

### 方法 2：手动安装

1. 打开 Tampermonkey 管理面板
2. 点击右上角 ➕ 图标
3. 复制脚本代码并粘贴
4. 保存（Ctrl+S 或 Cmd+S）

## 目录结构

```
tampermonkey-scripts/
├── scripts/          # 所有脚本
│   ├── script-1/
│   └── script-2/
└── README.md
```

## 开发说明

每个脚本都在 `scripts/` 目录下有独立的文件夹，包含：
- `*.user.js` - 油猴脚本文件
- `README.md` - 脚本说明（可选）

## License

MIT
