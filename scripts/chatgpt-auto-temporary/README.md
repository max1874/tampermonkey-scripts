# ChatGPT Auto Temporary Chat

自动为每个新的 ChatGPT 对话启用临时对话模式（隐私模式）。

## 功能

- 当访问 ChatGPT 首页时，自动添加 `?temporary-chat=true` 参数
- 自动重定向到临时对话模式，无需手动点击
- 不影响已有的历史对话

## 使用方法

1. 安装此脚本到 Tampermonkey
2. 访问 [ChatGPT](https://chatgpt.com)
3. 脚本会自动将你重定向到临时对话模式

## 工作原理

ChatGPT 原生支持通过 URL 参数 `?temporary-chat=true` 来启用临时对话模式。此脚本检测当你访问 ChatGPT 首页时，如果 URL 中没有该参数，会自动添加并重定向。

## 注意事项

- 脚本仅在访问 ChatGPT 首页 (`https://chatgpt.com/`) 时触发
- 不会影响你已经打开的历史对话 (`https://chatgpt.com/c/xxx`)
- 如果你想访问普通对话而非临时对话，可以临时禁用此脚本

## 临时对话说明

临时对话（Temporary Chat）是 ChatGPT 的隐私功能：
- 对话不会保存到历史记录
- 对话不会用于训练 AI 模型
- 适合处理敏感或私密信息
