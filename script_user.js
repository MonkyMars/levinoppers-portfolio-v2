const button1 = document.getElementById('button1');

function login(event) {
    event.preventDefault();

    var email = document.getElementById('email').value.trim().toLowerCase();
    var password = document.getElementById('password').value.trim();

    const storedEmail = getCookieValue('CookieBy');
    const storedPassword = getCookieValue('CookieBy1');

    if (email === storedEmail && password === storedPassword) {
        button1.value = "Logging in..."
        window.location.href = 'user_info.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=').map(part => part.trim());
        if (name === cookieName) {
            return value;
        }
    }
    return null;
}


