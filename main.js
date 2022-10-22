const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive"); 
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    //Con <element>.classList.toggle decimos que quite o ponga la lista mencionada segun exista o no
    //Con esto podemos hacer que un menu apaezca o desaparezca dando click en ese elemento  
}