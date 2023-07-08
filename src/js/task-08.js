const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);
const profile = {};

function onSubmit (event) {
    event.preventDefault();
    const { 
        elements: {email, password}
    } = event.currentTarget;

    if(email.value === '' || password.value === '') {
        alert('Будь ласка заповніть всі поля!');
    }else {
        profile.email = email.value;
        profile.password = password.value;
        console.log(profile);
    }

    formEl.reset();
};