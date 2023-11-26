const tablica = [] // tworzymy tablice
console.log(tablica)
//łapiemy elementy z html
const button = document.querySelector('.button')
const zadanie = document.querySelector('.orderedList')
const taskDone = document.querySelector('.done')
const input = document.querySelector('.input')
let id = 0

// dodawnie elementu
button.addEventListener('click', event => {
  event.preventDefault()
  if (!input.value.trim() == '') {
    //tworzenie elementow
    const newLi = document.createElement('li')
    const doneButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    // wpisujemy zawartość buttonu
    deleteButton.textContent = '✖'
    doneButton.textContent = '✔'

    // deklarujemy tablice
    const newTask = {
      id: id + 1,
      zadanie: input.value,
      done: false
    }

    //dodajemy klasy do elementu
    newLi.classList.add('orderedList__li')
    deleteButton.classList.add('deleteButton')
    deleteButton.classList.add('button')
    doneButton.classList.add('button')
    doneButton.classList.add('doneButton')

    //push dodaje nowy element na koniec tablicy
    tablica.push(newTask) 

    id++

    input.value = ''

    // deklarowanie co ma znalezc sie w newLi oraz zadanie
    newLi.textContent = tablica[(id -= 1)].zadanie
    newLi.appendChild(deleteButton)
    newLi.appendChild(doneButton)
    zadanie.appendChild(newLi)

    id += 1
    // zmienia klasy by sprawdzic czy jest zrobione
    doneButton.addEventListener('click', event => {
      event.preventDefault()
      newLi.classList.toggle('taskDone')
      if (newLi.classList.contains('taskDone')) {
        taskDone.appendChild(newLi)
      } else {
        zadanie.appendChild(newLi)
      }
    })
    //usuwanie
    deleteButton.addEventListener('click', event => {
      event.preventDefault()
      newLi.remove()
    })
  }
})
