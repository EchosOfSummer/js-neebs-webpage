const link = document.querySelector('#fork')
link.addEventListener('mouseover', () => {
    link.style.textDecoration = 'underline'
    link.style.color = 'red'
})
link.addEventListener('mouseout', () => {
    link.style.textDecoration = ''
    link.style.color = ''
})
let isBold = false
setInterval(() => {
    if (isBold) {
        link.style.color = ''
        link.style.fontWeight = 'normal'
        link.style.textDecoration = 'none'
        link.style.fontSize = '1rem'
    } else {
        link.style.color = 'green'
        link.style.fontWeight = 'bold'
        link.style.textDecoration = 'underline'
        link.style.fontSize = '2rem'
    }
    isBold = !isBold
}, 3000)
/* 
//const nav = document.querySelector('nav')
//nav.addEventListener('mouseenter', () => {

//const h1 = document.querySelector('h1')
//h1.textContent = 'nothing special'
//h1.style.textDecoration = 'underline'
//h1.style.fontWeight = 'bold'
//}) 


//setTimeout(() => {

    //const h1 = document.querySelector('h1')
   // h1.textContent = 'nothing special'
   // h1.style.textDecoration = 'underline'
    //h1.style.fontWeight = 'bold'

//}, 3000)

// const h2 = document.querySelector('h2')
// h2.style.backgroundColor = 'lightblue'
// h2.style.color = 'red'
// h2.style.textAlign = 'center'
// h2.style.fontSize = '2em'

// setTimeout(() => {
//     h2.style.border = '2px solid black'
//     h2.style.borderRadius = '5px'
//     h2.style.padding = '10px'
// }, 1000) 

const aboutA = document.querySelector('#about')
aboutA.style.color = 'orange'

const contactA = document.querySelector('#contact')
contactA.style.color = 'red'

const section = document.querySelector('section')

const active = section.querySelector('.active')
active.style.color = 'brown'

const p = section.querySelector('p')
setTimeout(() => {
    p.textContent = 'lorem ipsum'
}, 6000)

const span = section.querySelector('span')
 

const activeElements = document.querySelectorAll('.active')
// add border and radius, center
activeElements.forEach(el => {
    el.style.border = '2px dashed red'
    el.style.borderRadius = '5px'
    el.style.margin = '10px'
    el.style.padding = '10px'
    
})
 
//for (let i = 0; i < activeElements.length; i++) {
    //activeElements[i].style.border = '2px solid red'
   // activeElements[i].style.borderRadius = '5px'
//}
// add underline to footer link and have it change color on hover

//link.style.textDecoration = 'underline'
// link.addEventListener('mouseover', () => {
//     link.style.color = 'red'
//     link.style.textDecoration = 'underline'
// })
// link.addEventListener('mouseout', () => {
//     link.style.color = ''
//     link.style.textDecoration = ''
// }) 



// const link = document.querySelector('#fork')
// link.style.textDecoration = 'underline'
 */