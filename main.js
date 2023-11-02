document.querySelector('#show').addEventListener('click', () => {
  document.getElementById('on-open').style.display = 'block'
  document.getElementById('show').style.display = 'none'
  document.getElementById('hide').style.display = 'block'
})

document.querySelector('#hide').addEventListener('click',()=>{
  document.getElementById('on-open').style.display = 'none'
  document.getElementById('show').style.display = 'block'
  document.getElementById('hide').style.display = 'none'
})