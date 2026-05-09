const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('.mobile-nav');

let isMenuOpen = false;
navButton.addEventListener('click', () => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

function openMenu () {
    isMenuOpen = true;
    nav.style.opacity = 100;
    nav.inert = false;
    nav.style.zIndex = "10";
    document.body.style.overflow = "hidden";
    navButton.children[0].src = '/images/close.svg';
}

function closeMenu() {
    isMenuOpen = false;
    nav.style.opacity = 0;
    nav.inert = true;
    nav.style.zIndex = "-1";
    document.body.style.overflow = "auto";
    navButton.children[0].src = '/images/open.svg';
}