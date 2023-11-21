const tablica = []
console.log(tablica)
const button = document.querySelector('.button')
const zadanie = document.querySelector('.zadanie')
const input = document.querySelector('.input')
let id = 0
button.addEventListener('click', event => {
  event.preventDefault()
  if (!input.value.trim() == '') {
    const newLi = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    const newTask = {
      id: id + 1,
      zadanie: input.value,
      visible: true
    }
    newLi.classList.add('orderedList__li')
    deleteButton.classList.add('usun')
    tablica.push(newTask)

    id++

    input.value = ''

    newLi.textContent = tablica[(id -= 1)].zadanie
    zadanie.appendChild(newLi)
    zadanie.appendChild(deleteButton)

    id += 1

    deleteButton.addEventListener('click', event => {
      event.preventDefault()
      zadanie.removeChild(newLi)
      zadanie.removeChild(deleteButton)
    })
  }
})
