toggleBtn = document.querySelector('.button')
pageBody = document.body

toggleBtn.addEventListener('click', function(event) {
        pageBody.classList.toggle("dark")
        toggleBtn.classList.toggle("active")
        console.dir(document)
})
