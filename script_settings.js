// Retrieve the theme preference from local storage
const theme = localStorage.getItem('theme');

// Function to set the theme based on the preference
function setTheme(theme) {
  // Update the body class based on the theme preference
  document.body.classList.toggle('dark-mode', theme === 'dark-mode');
}

// Set the theme on page load
setTheme(theme);

// Handler for toggling the theme
function handleThemeToggle() {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');

  // Get the updated theme preference
  const updatedTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';

  // Update the theme preference in local storage
  localStorage.setItem('theme', updatedTheme);
}

// Event listener for the theme toggle button
document.getElementById('toggle-checkbox').addEventListener('change', handleThemeToggle);

function updateBorderColors() {
  const isDarkMode = localStorage.contains('dark-mode');
  const borderElements = document.querySelectorAll('form_chemistry');

  borderElements.forEach(element => {
    if (isDarkMode) {
      element.style.borderColor = 'var(--border-color)';
    } else {
      element.style.borderColor = 'var(--border-color)';
    }
  });
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const delete_acc = document.getElementById("Delete_acc");

delete_acc.onclick = function() {
  deleteCookie("CookieBy");
  deleteCookie("CookieBy1");
  window.alert("Your account has been deleted");
}