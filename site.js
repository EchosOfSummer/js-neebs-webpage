
/* 
const nav = document.querySelector('nav')
nav.addEventListener('mouseenter', () => {

const h1 = document.querySelector('h1')
h1.textContent = 'nothing special'
h1.style.textDecoration = 'underline'
h1.style.fontWeight = 'bold'
}) 
*/
/* 
setTimeout(() => {

    const h1 = document.querySelector('h1')
    h1.textContent = 'nothing special'
    h1.style.textDecoration = 'underline'
    h1.style.fontWeight = 'bold'

}, 3000)
 */
const h2 = document.querySelector('h2')
h2.style.backgroundColor = 'lightblue'
h2.style.color = 'red'
h2.style.textAlign = 'center'
h2.style.fontSize = '2em'

setTimeout(() => {
    h2.style.border = '2px solid black'
    h2.style.borderRadius = '5px'
    h2.style.padding = '10px'
}, 1000)