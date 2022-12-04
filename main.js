const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if(!isMobileMenuClosed) {//Si al abrir el menuMobile, el carrito esta abierto, entonces cierralo añadiendo inactive
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    if(!isProductDetailClosed) {//Si al abrir el menuMobile, el carrito esta abierto, entonces cierralo añadiendo inactive
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isAsideClosed) {//Si al abrir el carrito de compras, el menuMobile esta abierto, entonces cierralo añadiendo inactive
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle("inactive");
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    //Con <element>.classList.toggle decimos que quite o ponga la lista mencionada segun exista o no
    //Con esto podemos hacer que un menu apaezca o desaparezca dando click en ese elemento  
}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive");
    shoppingCartContainer.classList.add("inactive");
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "compu",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);
    
    

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}