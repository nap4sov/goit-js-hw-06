const refs = {
    form: document.querySelector('.login-form'),
    emailInput: document.querySelector('input[name="email"]'),
    passwordInput: document.querySelector('input[name="password"]')
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    
    const formElements = event.currentTarget.elements;
    const userEmail = formElements.email.value;
    const userPassword = formElements.password.value;

    if (userEmail.length === 0
    || userPassword.length === 0) {
        alert("Все поля должны быть заполнены!")
        return
    }

    const formData = {
        email: userEmail,
        password: userPassword
    }
    console.table(formData)

    event.currentTarget.reset()
}