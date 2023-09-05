const createNoteBtn = document.querySelector('.create-note-button')
const deleteNoteBtn = document.querySelector('.tool__delete')
const editNoteBtn = document.querySelector('.tool__edit')
const notesList = document.querySelector('.notes__list')

let notes = []
let savedNotes = JSON.parse(localStorage.getItem('savedNotes'))
let numberOfNote = 1

if (savedNotes !== null) {
    numberOfNote = savedNotes[savedNotes.length - 1].number + 1

    savedNotes.forEach((savedNote) => {
        notesList.insertAdjacentHTML("beforeend", getNoteTemplate(savedNote.number))
        let textArea = document.querySelector(`textarea[number="${savedNote.number}"]`)
        textArea.value = savedNote.textContent
        notes.push(savedNote)

        buttonsControl(savedNote.number + 1)
    })
} 


function getNoteTemplate(n) {
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

function render() {
    notesList.insertAdjacentHTML("beforeend", getNoteTemplate(numberOfNote))

    let note = {
        number: numberOfNote,
        textContent: '',
    }

    notes.push(note)
    numberOfNote++
}

// function setShadow(event) {
//     let prop = event.target.parentElement.parentElement
//     prop.classList.toggle('note__item--active')
// }

function buttonsControl(numberOfNote) {
    let editButton = document.querySelector(`.tool__edit[number="${numberOfNote - 1}"]`)
    let deleteButton = document.querySelector(`.tool__delete[number="${numberOfNote - 1}"]`)

    editButton.addEventListener('click', () => {
        let textArea = document.querySelector(`textarea[number="${editButton.getAttribute('number')}"]`)
        textArea.toggleAttribute('readonly')
        textArea.classList.toggle('note__textarea--active')
        textArea.parentElement.classList.toggle('note-textarea__wrapper--active')

        if(textArea.value.length !== 0) {
            notes.forEach((note) => {
                if(note.number === Number(editButton.getAttribute('number'))) {
                    note.textContent = textArea.value
                }
            })
        }

        console.log(notes)

        savedNotes = notes.filter(note => note.textContent.length > 0)
        localStorage.setItem('savedNotes', JSON.stringify(savedNotes))
    })

    deleteButton.addEventListener('click', () => {
        notes.forEach((note) => {
            if(note.number === Number(deleteButton.getAttribute('number'))) {
                notes.splice(notes.indexOf(note), 1)
            }
        })

        document.querySelector(`li[number="${deleteButton.getAttribute('number')}"]`).remove()
        savedNotes = notes.filter(note => note.textContent.length > 0)
        localStorage.setItem('savedNotes', JSON.stringify(savedNotes))

        console.log(notes)

        if(notes.length === 0) {
            localStorage.clear()
            numberOfNote = 1
        } else {
            numberOfNote = notes[notes.length - 1].number + 1
        }

        console.log(numberOfNote)
    })
}

createNoteBtn.addEventListener('click', () => {
    
    render()
    console.log(notes)

    buttonsControl(numberOfNote)
})











