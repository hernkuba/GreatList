const tablica = []
const button = document.querySelector('.button')
const zadanie = document.querySelector('.zadanie')
const input = document.querySelector('.input')
let id = 0
button.addEventListener('click', event => {
  event.preventDefault()
  tablica.push({
    id: `${id + 1}`,
    zadanie: `${input.value}`,
    visible: true
  })
  id++
  input.value = ''
  console.log('click')

  zadanie.innerHTML += `<li>${tablica[(id -= 1)].zadanie}</li>`
  id += 1
})
