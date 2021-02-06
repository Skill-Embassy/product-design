const nav = document.querySelector('nav')
const faqs = document.querySelectorAll('.single_faq')

// functions 
function toggleFAQ(faq) {
    faq.classList.toggle('close')
}

function navBarChanger() {
    if (pageYOffset >= 100) {
        nav.style.backgroundColor = 'white'
        nav.style.boxShadow = '0px 0px 12px -2px rgba(0, 0, 0, 0.5)'
    } else {
        nav.style.backgroundColor = 'transparent'
        nav.style.boxShadow = 'unset'
    }
}






// event listeners
window.addEventListener('scroll', navBarChanger)

faqs.forEach(faq => {
    faq.addEventListener('click', e => {
        toggleFAQ(faq)
    })
})