document.addEventListener("DOMContentLoaded", function() {
  const emailParagraph = document.getElementById('emailParagraph');
  const passwordParagraph = document.getElementById('passwordParagraph');
  const joinDateParagraph = document.querySelector('.join-dateParagraph');

  const emailValue = getCookie('CookieBy');
  const passwordValue = getCookie('CookieBy1');
  const joinDateValue = getCookie('CookieBy2');
  if (emailValue && passwordValue) {
    emailParagraph.textContent = emailValue;
    passwordParagraph.textContent = passwordValue.replace(/./g, '●');
  } else {
    emailParagraph.textContent = "Email not found in cookie.";
    passwordParagraph.textContent = "Password not found in cookie.";
  }


  joinDateParagraph.textContent = joinDateValue;
});

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

const togglePassword = document.getElementById("button12");

togglePassword.onclick = function(event) {   
  event.preventDefault();  
  const passwordParagraph = document.getElementById('passwordParagraph');
  const passwordValue = getCookie('CookieBy1');

  if (togglePassword.classList.contains('pressed')) {
    togglePassword.classList.remove('pressed');
    togglePassword.classList.add('unpressed');
    passwordParagraph.textContent = passwordValue.replace(/./g, '●');
  } else {
    togglePassword.classList.add('pressed');
    togglePassword.classList.remove('unpressed');
    passwordParagraph.textContent =  passwordValue;
  }
};



const menuToggle = document.getElementById('menu-toggle');
const menuContainer = document.querySelector('.menu-container');
const menuIcon = document.querySelector('.menu-icon');

// Function to close menu
function closeMenu() {
  menuContainer.style.left = '-60%'; 
  menuIcon.style.left = '10px'; 
  menuToggle.checked = false; 
}

menuToggle.addEventListener('change', function() {
  if (this.checked) {
    menuContainer.style.left = '0'; 
    menuIcon.style.left = 'calc(60% + 10px)'; 
  } else {
    closeMenu(); 
  }
});

document.addEventListener('click', function(event) {
  const isClickInsideMenu = menuContainer.contains(event.target);
  const isClickOnMenuIcon = menuIcon.contains(event.target);
  const isClickOnToggle = event.target === menuToggle;

  if (!isClickInsideMenu && !isClickOnMenuIcon && !isClickOnToggle) {
    closeMenu();
  }
});


