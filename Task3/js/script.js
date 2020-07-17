'use strict'
const modalWindow = document.querySelector('.modalWindow');

document.querySelector('.openWindow').addEventListener('click', () => {
  console.log('click');
  modalWindow.style.display = 'block';
  modalWindow.style.marginTop = '0';
});

document.querySelector('.closeWindow').addEventListener('click', () => {
  modalWindow.style.display = 'none';
  modalWindow.style.marginTop = '19px';
});
