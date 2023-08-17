const menuBtn = document.querySelector('.burger-menu__button')
const menu = document.querySelector('.burger-menu')

menuBtn.onclick = function() {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        menuBtn.classList.add('active')
    } else if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
    }
}