const tablica = []
console.log(tablica)
const button = document.querySelector('.button')
const zadanie = document.querySelector('.orderedList')
const taskDone = document.querySelector('.done')
const input = document.querySelector('.input')
let id = 0
button.addEventListener('click', event => {
  event.preventDefault()
  if (!input.value.trim() == '') {
    const newLi = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    const doneButton = document.createElement('button')
    doneButton.textContent = '✔'
    const newTask = {
      id: id + 1,
      zadanie: input.value,
      done: false
    }
    newLi.classList.add('orderedList__li')
    deleteButton.classList.add('deleteButton')
    tablica.push(newTask)

    id++

    input.value = ''

    newLi.textContent = tablica[(id -= 1)].zadanie
    newLi.appendChild(deleteButton)
    newLi.appendChild(doneButton)
    zadanie.appendChild(newLi)

    id += 1

    doneButton.addEventListener('click', event => {
      event.preventDefault()
      newLi.classList.toggle('taskDone')
      if (newLi.classList.contains('taskDone')) {
        taskDone.appendChild(newLi)
      } else {
        zadanie.appendChild(newLi)
      }
    })

    deleteButton.addEventListener('click', event => {
      event.preventDefault()
      newLi.remove()
    })
  }
})
