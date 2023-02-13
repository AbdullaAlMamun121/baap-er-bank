document.getElementById('submit').addEventListener('click', function () {
    // get email id from input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // get password from input value
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    
    if (email === 'shontan@.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('Toke ami tejjo shontan goshona korlam tui password vule gesos');
    }
    
})