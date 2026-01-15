# Google Authuser Auto Switcher

自动为 Google 相关网站的 URL 添加 `authuser` 参数，确保使用指定的 Google 账号登录。

## 功能

- 自动检测所有 HTTPS 网站
- 如果 URL 中没有 `authuser` 参数，自动添加并刷新页面
- 适用于需要在多个 Google 账号之间切换的场景

## 使用方法

1. 安装此脚本到 Tampermonkey
2. 编辑脚本中的 `authuser` 变量，改成你的工作账号索引（通常是 0-7 之间的数字）
3. 访问 Google 相关网站，脚本会自动添加参数

## 配置

```javascript
const authuser = '7'; // ← 改成你的账号索引
```

账号索引可以通过以下方式查看：
- 点击 Google 网站右上角的头像
- 查看账号列表，从上往下数，第一个是 0，第二个是 1，以此类推

## 注意事项

- 此脚本会在所有 HTTPS 网站上运行，但只对带有 URL 参数的网站有效
- 如果网站不支持 `authuser` 参数，该参数不会产生任何影响
