const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    displayedValue: document.querySelector('#value')
}

refs.decrement.addEventListener('click', onDecrementClick)
refs.increment.addEventListener('click', onIncrementClick)

let counterValue = 0;

function onDecrementClick() {
    counterValue -= 1;
    refs.displayedValue.textContent = counterValue
}

function onIncrementClick() {
    counterValue += 1;
    refs.displayedValue.textContent = counterValue
}