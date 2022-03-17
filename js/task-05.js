const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const isEmpty = event.currentTarget.value.length === 0;
    refs.output.textContent = event.currentTarget.value;
    if (isEmpty) {
        refs.output.textContent = 'Anonymous';
    }
} 