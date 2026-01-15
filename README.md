# Tampermonkey Scripts

我的油猴脚本集合。

## 脚本列表

### Google Authuser Auto Switcher

自动为 Google 相关网站添加 `authuser` 参数，确保使用指定的账号登录。

[查看说明](scripts/google-authuser-auto/README.md)

### ChatGPT Auto Temporary Chat

自动为每个新的 ChatGPT 对话启用临时对话模式（隐私模式）。

[查看说明](scripts/chatgpt-auto-temporary/README.md)

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 打开 Tampermonkey 管理面板
3. 点击右上角 ➕ 图标（新建脚本）
4. 复制对应脚本的代码并粘贴
5. 保存（Ctrl+S 或 Cmd+S）

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
