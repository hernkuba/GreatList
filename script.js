const tablica = [] // tworzymy tablice
console.log(tablica)
//łapiemy elementy z html
const button = document.querySelector('.button')
const zadanie = document.querySelector('.orderedList')
const taskDone = document.querySelector('.done')
const input = document.querySelector('.input')
let id = 0  //deklarujemy zmienna 'id'
// .addEventListener dodaje do elementu 'nasluchiwacz'
//click przekazuje argument co musi sie stac zeby funkcja sie wywolala
// lapiemy event.preventDefault() zeby nie wysyłalo formularza ;)
button.addEventListener('click', event => {
  event.preventDefault()
  if (!input.value.trim() == '') {
    const newLi = document.createElement('li') //tworzymy elementy
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete' // nadajemy im text content
    const doneButton = document.createElement('button')
    doneButton.textContent = '✔'
    const newTask = { //definiujemy tablice
      id: id + 1,
      zadanie: input.value, // tutaj pobiera dane z inputa
      done: false
    }
    newLi.classList.add('orderedList__li')  //dodajemy klase do wyzej stworzonych elementow zadeklarowanych do zmiennej
    deleteButton.classList.add('deleteButton')  
    tablica.push(newTask) //push dodaje nowy element na koniec tablicy

    id++

    input.value = '' //po wpisaniu input value rowna sie 0

    newLi.textContent = tablica[(id -= 1)].zadanie //deklarujemy co ma znajdowac sie w zmiennej newLi
    newLi.appendChild(deleteButton) //append child dodajemy komponent wpisany w nawiasu do elementu newLi
    newLi.appendChild(doneButton)
    zadanie.appendChild(newLi)  //do elementu zadanie wpisujemy newLi (wszystko co sie w nim dotychczas znajduje)

    id += 1

    doneButton.addEventListener('click', event => {
      event.preventDefault()
      newLi.classList.toggle('taskDone') //co wywołanie funkcji zmienia się klasa w css, przyda się do stylowania 
      //oraz dalszej logiki
      if (newLi.classList.contains('taskDone')) { //sprawdzamy czy newLi zawiera tą klase jesli tak dodajemy
        //element newLi do taskDone zadeklarowanego wyzej
        taskDone.appendChild(newLi)
      } else { //inaczej spowrotem do zadanie linia 36
        zadanie.appendChild(newLi)
      }
    })

    deleteButton.addEventListener('click', event => {
      event.preventDefault()
      newLi.remove() //jesli klikniemy deleteButton usuwamy newLi
    })
  }
})
