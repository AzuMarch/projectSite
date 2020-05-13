'use strict';

const body = document.querySelector('body');
const popup = document.querySelector('.popup-container');

body.addEventListener('mouseleave', showPopup);

function showPopup(event) {
  popup.style.display = 'flex';
}

body.addEventListener('click', e => {
  if(!e.target.closest('.popup')) {
    popup.style.display = 'none';
    body.removeEventListener('mouseleave', showPopup);
  }
});
