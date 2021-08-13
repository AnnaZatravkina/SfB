const openMenu = document.querySelector(".fullscreen-menu");
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".fullscreen-menu__close");
const items = document.querySelectorAll(".fullscreen-menu__item");

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    openMenu.classList.add("open");
});

closeMenu.addEventListener("click", (e) => {
    e.preventDefault();
    openMenu.classList.remove("open");
});

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", (e) => {
        e.preventDefault();
        openMenu.classList.remove("open");
    });
};