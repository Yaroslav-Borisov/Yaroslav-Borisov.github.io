const allSounds = document.getElementsByTagName('audio')
const allSoundBtn = [...document.getElementsByTagName('button')]

function stopAllSounds() {
    Array.from(allSounds).forEach(item => item.pause())
}

for (let i = 0; i < allSoundBtn.length; i++) {
    allSoundBtn[i].addEventListener('click', function(event) {
        stopAllSounds()
        event.target.nextSibling.nextSibling.play()
    })
}


