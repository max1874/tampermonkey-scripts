# Tampermonkey Scripts

English | [简体中文](README.md)

My collection of Tampermonkey userscripts.

## Script List

### Google Authuser Auto Switcher

Automatically adds `authuser` parameter to Google-related websites to ensure using the specified account.

[View Documentation](scripts/google-authuser-auto/README.en.md)

### ChatGPT Auto Temporary Chat

Automatically enables temporary chat mode (privacy mode) for every new ChatGPT conversation.

[View Documentation](scripts/chatgpt-auto-temporary/README.en.md)

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Open Tampermonkey dashboard
3. Click the ➕ icon in the top right corner (Create new script)
4. Copy and paste the corresponding script code
5. Save (Ctrl+S or Cmd+S)

## Directory Structure

```
tampermonkey-scripts/
├── scripts/          # All scripts
│   ├── script-1/
│   └── script-2/
└── README.md
```

## Development Notes

Each script has its own folder under the `scripts/` directory, containing:
- `*.user.js` - Tampermonkey userscript file
- `README.md` - Script documentation (optional)

## License

MIT
