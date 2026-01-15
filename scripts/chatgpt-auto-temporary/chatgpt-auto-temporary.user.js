// ==UserScript==
// @name         ChatGPT Auto Temporary Chat
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Automatically enable temporary chat for new ChatGPT conversations
// @author       Ritsu
// @match        https://chatgpt.com/*
// @updateURL    https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/chatgpt-auto-temporary/chatgpt-auto-temporary.user.js
// @downloadURL  https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/chatgpt-auto-temporary/chatgpt-auto-temporary.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // 仅在首页且没有 temporary-chat 参数时重定向
    if (url.pathname === '/' && !params.has('temporary-chat')) {
        params.set('temporary-chat', 'true');
        url.search = params.toString();
        window.location.replace(url.toString());
    }
})();
