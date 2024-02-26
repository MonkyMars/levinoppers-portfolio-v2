function signup(event) {
    event.preventDefault();

    var email = document.getElementById('email').value.trim().toLowerCase();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('password1').value.trim();

    if (!validatePassword(password)) {
        window.alert('Password must be at least 8 characters long and contain at least one capital letter and one number.');
        return;
    }

    if (password !== confirmPassword) {
        window.alert('Passwords do not match. Please try again.');
        return;
    }
    const currentDate = new Date().toLocaleDateString();
    setCookie('CookieBy', email, 365);
    setCookie('CookieBy1', password, 365);
    setCookie('CookieBy2', currentDate, 365)
    window.location.href = 'user.html';
}

function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }

    return true;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
