const button = document.querySelector('.button-esp')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click',()=>{
  popup.style.display = 'block'
})
popup.addEventListener('click',()=>{
  popup.style.display = 'none'
})