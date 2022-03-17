const inputRef = document.querySelector('#validation-input');
const requiredInputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onFocusOff);

function onFocusOff(event) {
    if (requiredInputLength === event.currentTarget.value.length) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    }
    else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
}
