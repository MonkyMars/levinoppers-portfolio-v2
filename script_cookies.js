const cookiebox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executesCodes = () => {
  // Check if there are any cookies active
  if (!document.cookie) {
    console.log("No cookies active");
    // Show the popup if there are no cookies active
    cookiebox.classList.add("show");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        cookiebox.classList.remove("show");
        if(button.id == "acceptBtn"){
          document.cookie = `cookieBy = user; max-age = ` + 60 * 60 * 24 * 15 + ";path=/";
        }
      });
    });
  }
};

window.addEventListener("load", executesCodes);
console.log(cookiebox);



const menuToggle = document.getElementById('menu-toggle');
const menuContainer = document.querySelector('.menu-container');
const menuIcon = document.querySelector('.menu-icon');

// Function to close menu
function closeMenu() {
  menuContainer.style.left = '-60%'; // Slide menu out to left
  menuIcon.style.left = '10px'; // Move menu icon back to original position
  menuToggle.checked = false; // Uncheck the toggle input
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





