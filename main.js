const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const MyOrder = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if(!isMobileMenuClosed) {//Si al abrir el menuMobile, el carrito esta abierto, entonces cierralo añadiendo inactive
        mobileMenu.classList.add("inactive");
    }
    MyOrder.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = MyOrder.classList.contains("inactive");
    if(!isAsideClosed) {//Si al abrir el carrito de compras, el menuMobile esta abierto, entonces cierralo añadiendo inactive
        MyOrder.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    //Con <element>.classList.toggle decimos que quite o ponga la lista mencionada segun exista o no
    //Con esto podemos hacer que un menu apaezca o desaparezca dando click en ese elemento  
}