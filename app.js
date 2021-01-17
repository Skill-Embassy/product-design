const nav = document.querySelector('nav')

window.addEventListener('scroll', e => {
    if (pageYOffset >= 100) {
        nav.style.backgroundColor = 'white'
        nav.style.boxShadow = '0px 0px 12px -2px rgba(0, 0, 0, 0.5)'
    } else {
        nav.style.backgroundColor = 'transparent'
        nav.style.boxShadow = 'unset'
    }
})