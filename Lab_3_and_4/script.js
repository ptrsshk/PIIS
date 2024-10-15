import shirts from "./shirts.js"



const createShirtCards = ( ) => {
  const cardContainer = document.createElement('div')
  cardContainer.classList.add("cardContainer")
  
  for (const shirt of shirts) {
    
    
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
      <h2 class="cardName">${shirt.name?shirt.name:'Name unavailable'}</h2>
      <div class="cardImage">
        <img width="250px" height="291.25px" src="${shirt.colors.white.front}" alt="shirt image"/>
      </div>
      <h3 class="cardPrice">${shirt.price?shirt.price:"Price unavailable"}</h3>
      
      <p class="cardDescription">${shirt.description?shirt.description:'Description unavailable'}</p>
    `
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('btnContainer')
    const quickViewBtn = document.createElement('button')
    quickViewBtn.innerText = 'Quick View'
    quickViewBtn.classList.add('quickViewBtn')
    quickViewBtn.addEventListener('click', () => {openModal(shirt)})
    const seePageBtn = document.createElement('button')
    seePageBtn.innerText = 'See Page'
    seePageBtn.classList.add('seePageBtn')
    seePageBtn.addEventListener('click', () => {openDetailsPage(shirt)})

    btnContainer.appendChild(quickViewBtn)
    btnContainer.appendChild(seePageBtn)

    card.appendChild(btnContainer)
    cardContainer.appendChild(card)
  }
  document.body.appendChild(cardContainer)
}

createShirtCards()


function openModal(shirt) {
  const modal = document.getElementById('modal')
  modal.classList.add('active')
  modal.addEventListener('click', (e) => {if (e.target == modal) {modal.classList.remove('active')}})
  
  
  const name = document.getElementById('modalHeader')
  name.innerText=shirt.name?shirt.name:'Name unavailable'

  const frontImg = document.getElementById('frontImg')
  frontImg.src=shirt.colors.white.front
  const backImg = document.getElementById('backImg')
  backImg.src=shirt.colors.white.back
  const price = document.getElementById('modalPrice')
  price.innerText=shirt.price?shirt.price:'Price unavailable'
  const description = document.getElementById('modalDescription')
  description.innerText=shirt.description?shirt.description:'Description unavailable'
}

const openDetailsPage = (shirt) => {
  console.log(shirt.name);
  
  localStorage.setItem("name", shirt.name)
  window.location.href = 'details.html'
}
