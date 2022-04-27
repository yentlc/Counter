const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
let counter = 0;
let value = document.querySelector('#value');

decrease.addEventListener('click', () => {
  counter--;
  value.textContent = counter;
});
increase.addEventListener('click', () => {
  counter++;
  value.textContent = counter;
});
reset.addEventListener('click', () => {
  counter = 0;
  value.textContent = counter;
});
