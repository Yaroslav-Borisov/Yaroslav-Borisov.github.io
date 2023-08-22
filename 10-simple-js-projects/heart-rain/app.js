const pageBody = document.querySelector(".page-body")
const continueBtn = document.querySelector(".button__continue")
const stopBtn = document.querySelector(".button__stop")
const startBtn = document.querySelector(".button__start")


function getHeartImage () {
    let x = Math.trunc(Math.random() * 100)
    return `
    <img class="heart__image" src="img/heart.png" width = 60px height = 60px style = "left: ${x}vw;">
    `
}

function render () {
    pageBody.insertAdjacentHTML("beforeend", getHeartImage ())
    setTimeout(() => {
        const heart = document.querySelector(".heart__image")
        heart.remove()
    }, 10000)
}

stopBtn.addEventListener('click', function(event) {
    console.log('stop')
    clearInterval(heartRendering)
})

startBtn.addEventListener('click', function(event) {
    console.log('start')
    heartRendering = setInterval(() => {
        render()
    }, 1000)
})



