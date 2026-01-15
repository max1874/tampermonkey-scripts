// ==UserScript==
// @name         ChatGPT Auto Temporary Chat
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Automatically enable temporary chat for new ChatGPT conversations
// @author       Ritsu
// @match        https://chatgpt.com/*
// @updateURL    https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/chatgpt-auto-temporary/chatgpt-auto-temporary.user.js
// @downloadURL  https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/chatgpt-auto-temporary/chatgpt-auto-temporary.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 调试：确认脚本执行
    alert('[ChatGPT Auto Temporary] Script is running!');
    console.log('[ChatGPT Auto Temporary] Script loaded');
    console.log('[ChatGPT Auto Temporary] Current URL:', window.location.href);
    console.log('[ChatGPT Auto Temporary] Pathname:', window.location.pathname);

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // 仅在首页且没有 temporary-chat 参数时重定向
    if (url.pathname === '/' && !params.has('temporary-chat')) {
        console.log('[ChatGPT Auto Temporary] Redirecting to temporary chat mode...');
        params.set('temporary-chat', 'true');
        url.search = params.toString();
        console.log('[ChatGPT Auto Temporary] New URL:', url.toString());
        window.location.replace(url.toString());
    } else {
        console.log('[ChatGPT Auto Temporary] No redirect needed. Pathname:', url.pathname, 'Has param:', params.has('temporary-chat'));
    }
})();
