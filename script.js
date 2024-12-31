document.addEventListener('DOMContentLoaded', function() {
    // Preloader fadeout
    window.onload = () => {
      document.getElementById("preloader").style.display = "none";
    };
  });
  // Function to toggle the mobile menu
function toggleMenu() {
  const menu = document.querySelector('.navbar-mobile');
  menu.classList.toggle('menu-active');
}
