const createNoteBtn = document.querySelector('.create-note-button')
const notesList = document.querySelector('.notes__list')

function createNoteTemplate(n) {
    return `<li class="notes__item" number=${n}>
                <div class="note__header">
                    <span class="note__number"># ${n}</span>
                    <div class="note__tools">
                        <button class="tool__edit button" number=${n}>
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="tool__delete button" number=${n}>
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="note-textarea__wrapper">
                    <textarea class="note__textarea" placeholder="Нажмите на карандаш, чтобы создать заметку..." number=${n} readonly></textarea>
                </div>
            </li>`
}

function setShadow(event) {
    let prop = event.target.parentElement.parentElement
    prop.classList.toggle('note__item--active')
}

let numberOfNote = 1

createNoteBtn.addEventListener('click', () => {
    notesList.insertAdjacentHTML("beforeend", createNoteTemplate(numberOfNote))
    numberOfNote++

    let buttons = document.querySelectorAll('.button')

    buttons.forEach((b) => {
        b.addEventListener('click', () => {
            let textArea = document.querySelector(`textarea[number="${b.getAttribute('number')}"]`)

            textArea.addEventListener("mouseenter", setShadow)
            textArea.addEventListener("mouseleave", setShadow)

            if (b.className.includes('tool__edit')) {
                textArea.removeAttribute('readonly')
                textArea.classList.add('note__textarea--active')
                textArea.parentElement.classList.add('note-textarea__wrapper--active')
            } else {
                document.querySelector(`li[number="${b.getAttribute('number')}"]`).remove()
                numberOfNote = 1
            }
        })
    })
})







