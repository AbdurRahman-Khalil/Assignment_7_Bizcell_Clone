let navbar = document.getElementById("navbar");
let logoImg = document.getElementById("logo-img");


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("isScrolled");
        logoImg.src = "./images/header/logo-dark.png";

    } else {
        navbar.classList.remove("isScrolled");
        logoImg.src = "./images/header/logo-light.png";
    }
});