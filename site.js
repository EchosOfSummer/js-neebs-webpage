
document.body.style.backgroundColor = 'lightblue'
document.title = "Neebin's Webpage of Stuff"

const nav = document.querySelector('nav')
if (nav){
    nav.addEventListener('mouseover', (event) => {
    const target = event.target
    let hover = target.closest('#contact')
    if (!hover) hover = target.closest('#home')
    if (!hover) hover = target.closest('#about')

    if (hover) {
        switch (hover.id) {
            case 'contact':
                hover.style.backgroundColor = 'lightgreen';
                break;
            case 'home':
                hover.style.backgroundColor = 'lightyellow';
                break;
            case 'about':
                hover.style.backgroundColor = 'lightcoral';
                break;
            default:
                nav.style.backgroundColor = '';
        }
    }
})
nav.addEventListener('mouseout', (event) => {
    if (!nav.contains(event.relatedTarget)) {
        nav.style.backgroundColor = ''
        if (contact) {
            contact.style.backgroundColor = ''
        }
        if (home) {
            home.style.backgroundColor = ''
        }
        if (about) {
            about.style.backgroundColor = ''
        }
    }
})

}


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

const section = document.querySelector('section')
const active = section.querySelector('.active')
setTimeout(() => {
    active.style.color = 'brown'
}, 2000)
const p = section.querySelector('p')
setTimeout(() => {
    p.textContent = 'lorem ipsum'
}, 6000)
const span = section.querySelector('span')
setTimeout(() => {
    span.textContent = 'lorem ipsum'
}, 6000)


/* exercise 1,2 wk2, went down a rabbit hole...
const h2 = document.querySelector('h2')
h2.style.color = 'red'
h2.style.textAlign = 'center'
h2.style.fontSize = '2em'

setTimeout(() => {
h2.style.border = '2px solid black'
h2.style.borderRadius = '5px'
h2.style.padding = '10px'
}, 4000) 

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
}, 3000) */