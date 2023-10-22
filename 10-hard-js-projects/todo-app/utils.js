export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('notes')) || []
}

export const saveToLocalStorage = (notes) => {
  const stringifiedNotes = JSON.stringify(notes)
  localStorage.setItem('notes', stringifiedNotes)
}
