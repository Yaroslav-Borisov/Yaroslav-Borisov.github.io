const getNoteTemplate = (id, text, done, isRendered, isDoneRendered) => `
            <li class="todo__item ${done ? 'todo__item--done' : ''} ${!isRendered ? 'todo__item--appearance' : ''} ${!isDoneRendered ? 'todo__item--slide-in' : ''}" id="${id}" data-note>
                ${text}
            </li>
`

const getNoteTemplates = (notes) => {
  return notes.map((note) => getNoteTemplate(note.id, note.text, note.done, renderedNotesIds.includes(note.id), renderedDoneNotesIds.includes(note.id))).join('')
}

const renderedNotesIds = []
const renderedDoneNotesIds = []

export const renderNotes = (root, notes) => {
  root.innerHTML = getNoteTemplates(notes)

  notes.forEach(({ id, done }) => {
    if (!renderedNotesIds.includes(id)) {
      renderedNotesIds.push(id)
    }

    if (!renderedDoneNotesIds.includes(id) && done) {
      renderedDoneNotesIds.push(id)
    }
  });
}