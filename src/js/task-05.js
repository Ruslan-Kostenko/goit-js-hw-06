const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    if(inputEl.value !== '') {
       return outputEl.textContent = inputEl.value; 
    }
    return outputEl.textContent = 'Anonymous';
})
