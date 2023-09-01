const timer = document.querySelector(".timer__list")

function render() {
    let nowDate = new Date()
    let newYear = nowDate.getFullYear() + 1
    let newYearDate = new Date(newYear, 0, 0, 0, 0, 0, 0)

    let ms = newYearDate - nowDate
    let days = Math.trunc(ms / 1000 / 60 / 60 / 24)
    let hours = Math.trunc((ms - (days * 24 * 3600 * 1000)) / 1000 / 3600)
    let minutes = Math.trunc((ms - (days * 24000 * 3600) - (hours * 3600000)) / 1000 / 60)
    let seconds = Math.trunc((ms - (days * 24000 * 3600) - (hours * 3600000) - (minutes * 60000)) / 1000)

    timer.innerHTML = `
    <li class="timer__item">${days} days</li>
    <li class="timer__item">${hours} hour</li>
    <li class="timer__item">${minutes} min</li>
    <li class="timer__item">${seconds} sec</li> `

}

render()

setInterval(() => {
    render()
}
, 1000)


