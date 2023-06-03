const colors=['green', 'red', 'rgba(133,122,200)', '#f15085', 'orange', 'yellow', 'seagreen']

const btnClick = document.getElementById('btn');
const color = document.querySelector('.color')
const colorText = document.getElementById('color-text')

btnClick.addEventListener('click', ()=>{
    const randomNumber = Math.floor(Math.random() * colors.length)
    color.innerHTML = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]
    colorText.style.color = colors[randomNumber]
})

