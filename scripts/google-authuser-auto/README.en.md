# Google Authuser Auto Switcher

English | [简体中文](README.md)

Automatically adds `authuser` parameter to Google-related website URLs to ensure using the specified Google account.

## Features

- Automatically detects all HTTPS websites
- Automatically adds `authuser` parameter if not present in the URL and refreshes the page
- Suitable for scenarios requiring switching between multiple Google accounts

## Usage

1. Install this script to Tampermonkey
2. Edit the `authuser` variable in the script to your work account index (typically a number between 0-7)
3. Visit Google-related websites, and the script will automatically add the parameter

## Configuration

```javascript
const authuser = '7'; // ← Change to your account index
```

To find your account index:
- Click the profile picture in the top-right corner of any Google website
- View the account list, counting from top to bottom: first is 0, second is 1, and so on

## Notes

- This script runs on all HTTPS websites, but only affects sites that support URL parameters
- If a website doesn't support the `authuser` parameter, the parameter will have no effect
