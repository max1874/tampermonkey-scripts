// ==UserScript==
// @name         Google Authuser Auto Switcher
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Automatically add authuser parameter to Google URLs
// @author       Ritsu
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/google-authuser-auto/google-authuser-auto.user.js
// @downloadURL  https://raw.githubusercontent.com/max1874/tampermonkey-scripts/main/scripts/google-authuser-auto/google-authuser-auto.user.js
// @grant        none
// ==/UserScript==

(function() {
    const authuser = '7'; // ← 改成你的工作账号索引
    const url = new URL(location.href);
    if (!url.searchParams.has('authuser')) {
        url.searchParams.set('authuser', authuser);
        location.replace(url.toString());
    }
})();
