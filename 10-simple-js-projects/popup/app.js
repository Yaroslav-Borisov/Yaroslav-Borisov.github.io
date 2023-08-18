openBtn = document.querySelector('.button')
closeBtn = document.querySelector('.popup__close-button')
popup = document.querySelector('.popup__wrapper')

openBtn.addEventListener('click', function(event) {
    popup.classList.add("active");

})

closeBtn.addEventListener('click', function(event) {
    popup.classList.remove("active");
})