// ==UserScript==
// @name        Canvas Quickswitch
// @namespace   https://github.com/Kingofhollows099
// @match       https://*.instructure.com/courses/*/assignments/*/submissions/*
// @grant       none
// @version     1.0
// @author      Kingofhollows099
// @description Adds a button into all Canvas assignment submission pages that brings you to the assignment page for that assignment
// @downloadURL https://github.com/Kingofhollows099/Canvas-Quickswitch/raw/refs/heads/main/script.user.js
// ==/UserScript==

(function() {
    'use strict';
    if (window.top !== window.self) {
      console.log('Skipping button creation: Not in top-level')
      return;
    }

    if (!/^https:\/\/[^/]+\.instructure\.com\/courses\/\d+\/assignments\/\d+\/submissions\/\d+/.test(location.href)) return;

    console.log('Creating button...');

    var btn = document.createElement('button');
    btn.textContent = 'To Assignment ->';
    btn.id = 'canvas-strip-btn';
    Object.assign(btn.style, {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '2147483647',
    padding: '8px 14px',
    background: '#0a5a9e',
    color: 'white',
    border: '1px solid',
    borderColor: '#053156',
    borderRadius: '3px',
    fontWeight: 'normal',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    pointerEvents: 'auto',
    userSelect: 'none',
    transition: 'all .2s ease-in-out',
    overflow: 'hidden',
    textShadow: 'none',
    minWidth: '24px',
    minHeight: '24px'
});

var style = document.createElement('style');
style.textContent = `#canvas-strip-btn:hover { background: black !important; border-color: #333 !important; }`;
document.head.appendChild(style);
document.head.appendChild(style);

    btn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Button clicked');
        var u = location.href.replace(/\/submissions\/[^#?]*/, '');
        location.href = u;
    };

    // Append to html root, not body
    document.documentElement.appendChild(btn);
    console.log('Button appended to document root');

    // Force pointer capture
    btn.addEventListener('pointerdown', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }, true);

})();
