const container = document.querySelector(".zoom__container")
const image = document.querySelector(".zoom__image")

container.addEventListener('mousemove', (event) => {
    let x = event.clientX - event.target.offsetLeft
    let y = event.clientY - event.target.offsetTop

    image.style.transformOrigin = `${x}px ${y}px`
    image.style.transform = 'scale(2)'
})

container.addEventListener('mouseleave', (event) => {
    image.style.transformOrigin = `center center`
    image.style.transform = 'scale(1)'
})






