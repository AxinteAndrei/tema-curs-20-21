document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const dropdownMenu = document.querySelector(".menu-icon-container ul");
  
    menuIcon.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show-dropdown");
    });
  });
  
  