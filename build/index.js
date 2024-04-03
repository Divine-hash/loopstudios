"use strict";
const button = document.getElementById('menu-btn');
button.addEventListener('click', onclickEvent);
function onclickEvent({ target }) {
    const btn = target.closest('button');
    if (!btn)
        return;
    let isExpanded = this.getAttribute('aria-expanded');
    if (isExpanded == 'false') {
        this.setAttribute('aria-expanded', 'true');
        document.body.style.setProperty('overflow', 'hidden');
    }
    else {
        this.setAttribute('aria-expanded', "false");
        document.body.style.setProperty('overflow', '');
    }
}
