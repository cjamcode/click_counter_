const increase =  document.querySelector('.increase');
const decrease =  document.querySelector('.decrease');
const reset =  document.querySelector('.reset');
const display = document.querySelector('.display');

increase.addEventListener('click', () => {

    display.textContent = parseInt(display.textContent) + 1;
});

decrease.addEventListener('click', () => {

    if(parseInt(display.textContent) != 0)
        display.textContent = parseInt(display.textContent) - 1;
});

reset.addEventListener('click', () => {

    display.textContent = 0;
});