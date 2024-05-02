'use strict';

let input = document.querySelector('.calculator__screen');
const btnContainer = document.querySelector('.calculator__keys');

btnContainer.addEventListener('click', function(e) {
  // using event delegation
  const clicked = e.target;
  //Checking for each keys clicked
  if(clicked.classList.contains('operator')) {
    input.value += ' ' + clicked.textContent + ' ';
  } else if(clicked.classList.contains('btn')) {
    input.value += clicked.textContent;
  } else if (clicked.classList.contains('equals')) {
    const result = eval(input.value);
    input.value = result;
  }
})

