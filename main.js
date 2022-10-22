const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    //Con <element>.classList.toggle decimos que quite o ponga la lista mencionada segun exista o no
    //Con esto podemos hacer que un menu apaezca o desaparezca dando click en ese elemento  
}