"use strict";
const menu = document.querySelector('.header__menu');
menu.addEventListener('click', onClickEvent);
function onClickEvent() {
    if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        document.body.style.overflowY = 'hidden';
    }
    else {
        this.setAttribute('aria-expanded', 'false');
        document.body.style.overflowY = '';
    }
}
