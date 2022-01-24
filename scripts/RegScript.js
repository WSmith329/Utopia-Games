// Registration page specific script

// Regular expression for password
let regPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

// Verification alert for log in password
let logPass = document.getElementById('in-pass');

logPass.addEventListener('input', function(){
    let testInput = logPass.value;

    if (regPass.test(testInput)){
        logPass.setCustomValidity('');
    } else {
        logPass.setCustomValidity('Password is required to be at least 8 characters long and must include:\n - an uppercase letter\n - a lowercase letter\n - a number\n - and a special character.');
    }
});

// Verification alert for sign up password
let signPass = document.getElementById('up-pass');

signPass.addEventListener('input', function(){
    let testInput = signPass.value;

    if (regPass.test(testInput)){
        signPass.setCustomValidity('');
    } else {
        signPass.setCustomValidity('Password is required to be at least 8 characters long and must include:\n - an uppercase letter\n - a lowercase letter\n - a number\n - and a special character.');
    }
});



//Regular expression for name
let regName = new RegExp('^(?=.*[a-zA-Z\s-])(?=.{6,})');

// Verification alert for sign up name
let signName = document.getElementById('up-name');

signName.addEventListener('input', function(){
    let testInput = signName.value;

    if (regName.test(testInput)){
        signName.setCustomValidity('');
    } else {
        signName.setCustomValidity('Name entry must be at least 6 characters long\nand can only include letters, spaces, and hyphens.');
    }
});