import shirts from "./shirts.js"
const shirt = shirts.find((item) => { return item.name === localStorage.getItem('name')})
document.title = shirt.name||'Name unavailable'

let globColor = 'white'
let globSide = 'front'

const header = document.createElement('h1')
header.innerText = shirt.name||'Name unavailable'
const contentContainer = document.createElement('div')
const shirtImage = document.createElement('img')
shirtImage.src = shirt.colors[globColor][globSide]
shirtImage.alt = 'Picture unavailable'
const price = document.createElement('h2')
price.innerText = shirt.price||'Price unavailable'
const description = document.createElement('p')
description.innerText = shirt.description||'Description unavailable'

const infoContainer = document.createElement('div')
infoContainer.classList.add('infoContainer')
infoContainer.append(header,price,description)

if (Object.keys(shirt.colors).length>1) {
  const colorSelector = document.createElement('fieldset')
  colorSelector.innerHTML = '<legend>Choose color of a shirt:</legend>'

  for (const color in shirt.colors) {
    const radioContainer = document.createElement('div')
    radioContainer.style = `background-color: ${color=='white'?'white':'light'+color}`
    radioContainer.classList.add('radioContainer')
    const radioInput = document.createElement('input')
    radioInput.type = 'radio'
    radioInput.id = color
    radioInput.value = color
    radioInput.classList.add('radioButton')
    radioInput.checked = color=='white'?true:false
    radioInput.name = 'color'
    radioInput.addEventListener('change', () => {
      globColor = color
      shirtImage.src = shirt.colors[globColor][globSide]
    })
    const radioLabel = document.createElement('label')
    radioLabel.htmlFor = color

    radioContainer.append(radioInput,radioLabel)
    colorSelector.appendChild(radioContainer)
    infoContainer.append(colorSelector)
  }
}


const sideSelector = document.createElement('fieldset')
sideSelector.innerHTML = '<legend>Choose side of view:</legend>'

for (const side of ['front','back']) {
  const radioContainer = document.createElement('div')
  radioContainer.classList.add('radioContainer')
  const sideInput = document.createElement('input')
  sideInput.type = 'radio'
  sideInput.id = side
  sideInput.value = side
  sideInput.checked = side=='front'?true:false
  sideInput.classList.add('radioButton')
  sideInput.name = 'side'
  sideInput.addEventListener('change', () => {
    globSide = side
    shirtImage.src = shirt.colors[globColor][globSide]
  })
  const sideLabel = document.createElement('label')
  sideLabel.htmlFor = side
  sideLabel.innerText = side


  radioContainer.append(sideInput,sideLabel)
  sideSelector.appendChild(radioContainer)
  infoContainer.append(sideSelector)
}



const shirtContainer = document.createElement('div')
shirtContainer.classList.add('shirtContainer')
shirtContainer.append(shirtImage,infoContainer)


contentContainer.append(shirtContainer)
document.getElementById('detailsContainer').appendChild(contentContainer)