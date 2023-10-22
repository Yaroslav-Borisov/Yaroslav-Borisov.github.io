import { getFromLocalStorage, saveToLocalStorage } from "./utils.js";

export const notes = getFromLocalStorage()

export const createNotes = (input) => {
    const lastOrder = notes.length ? notes[notes.length - 1].order : 0

    return {
        id: Date.now(),
        text: input.value,
        order: lastOrder + 1,
        done: false,
    }
}

export const addNote = (input) => {
    if (input.value) {
        const newNote = createNotes(input)
        notes.push(newNote)
        console.log("addNote")
    }
}

export const removeNote = (id) => {
    const index = notes.findIndex(note => note.id === Number(id))
    notes.splice(index, 1)
    saveToLocalStorage(notes)
}

export const makeNoteDone = (id) => {
    const index = notes.findIndex(note => note.id === Number(id))
    notes[index].done = !notes[index].done
    saveToLocalStorage(notes)
}

