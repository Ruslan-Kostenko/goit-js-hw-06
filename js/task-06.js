const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    console.log(inputEl.value.length);

    if(inputEl.value.length === parseInt(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});