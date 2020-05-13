'use strict';

const body = document.querySelector('body');
const popup = document.querySelector('.popup-container');

body.addEventListener('mouseleave', e => {
  popup.style.display = 'flex';
});

body.addEventListener('click', e => {
  if(!e.target.closest('.popup')) {
    popup.style.display = 'none';
    popup.remove();
  }
});
