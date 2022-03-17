const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

refs.fontSizeControl.addEventListener('input', onControlChange);


function onControlChange() {
    refs.text.style.fontSize = `${refs.fontSizeControl.value}px`
}