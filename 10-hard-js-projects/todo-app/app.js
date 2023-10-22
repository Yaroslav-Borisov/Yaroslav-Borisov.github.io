import { renderNotes } from "./render.js"
import { notes, addNote, makeNoteDone, removeNote} from './model.js'


const initEvents = (root) => {
    const notesElements = root.querySelectorAll('[data-note]')

    Array.from(notesElements).forEach(notesElement => {
        notesElement.addEventListener('click', () => {
            console.log(notes)
            makeNoteDone(notesElement.id)
            render(root, notes)
        })

        notesElement.addEventListener('contextmenu', (event) => {
            console.log(notes)
            event.preventDefault()
            removeNote(notesElement.id)
            render(root, notes)
        })
    })
}

const render = (root, notes) => {
    renderNotes(root, notes)
    initEvents(root)
}

const init = () => {
    const notesListElement = document.getElementById('todo-list')
    const notesInputElement = document.getElementById('todo-input')

    notesInputElement.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            addNote(notesInputElement)
            render(notesListElement, notes)
            notesInputElement.value = ""
        }
    })

    render(notesListElement, notes)
}

init()

