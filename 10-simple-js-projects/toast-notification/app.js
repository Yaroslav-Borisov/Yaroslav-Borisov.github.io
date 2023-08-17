const btn = document.querySelector('.button')
const notification = document.querySelector('.notification')

let notificationIndex = 0

btn.addEventListener('click', function(event) {
    if (!notification.childElementCount) {
        notificationIndex = 0
    }
    notificationIndex++
    
    notification.insertAdjacentHTML("beforeend", `<p class="notification-text"> ${notificationIndex} ♥ click</p>`)
    setTimeout(() => {
        const notificationText = document.querySelector('.notification-text')
        notificationText.remove()

    }, 3000)

})

