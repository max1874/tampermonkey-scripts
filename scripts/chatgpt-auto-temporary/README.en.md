# ChatGPT Auto Temporary Chat

English | [简体中文](README.md)

Automatically enables temporary chat mode (privacy mode) for every new ChatGPT conversation.

## Features

- Automatically adds `?temporary-chat=true` parameter when visiting ChatGPT homepage
- Automatically redirects to temporary chat mode without manual clicking
- Does not affect existing chat history

## Usage

1. Install this script to Tampermonkey
2. Visit [ChatGPT](https://chatgpt.com)
3. The script will automatically redirect you to temporary chat mode

## How It Works

ChatGPT natively supports enabling temporary chat mode via the URL parameter `?temporary-chat=true`. This script detects when you visit the ChatGPT homepage and automatically adds this parameter if it's not present, then redirects.

## Notes

- The script only triggers when visiting the ChatGPT homepage (`https://chatgpt.com/`)
- Does not affect your existing chat history (`https://chatgpt.com/c/xxx`)
- If you want to access regular chat instead of temporary chat, you can temporarily disable this script

## About Temporary Chat

Temporary Chat is ChatGPT's privacy feature:
- Conversations are not saved to history
- Conversations are not used to train AI models
- Suitable for handling sensitive or private information
