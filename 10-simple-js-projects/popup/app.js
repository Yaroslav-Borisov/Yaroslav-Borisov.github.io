const openBtn = document.querySelector('.button')
const closeBtn = document.querySelector('.popup__close-button')
const popup = document.querySelector('.popup__wrapper')

openBtn.addEventListener('click', function(event) {
    popup.classList.add("active");

})

closeBtn.addEventListener('click', function(event) {
    popup.classList.remove("active");
})
