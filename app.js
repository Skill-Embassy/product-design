const nav = document.querySelector('nav')
const faqs = document.querySelectorAll('.single_faq')

// functions 
function toggleFAQ(faq) {
    faq.classList.toggle('close')
}







// event listeners
window.addEventListener('scroll', e => {
    if (pageYOffset >= 100) {
        nav.style.backgroundColor = 'white'
        nav.style.boxShadow = '0px 0px 12px -2px rgba(0, 0, 0, 0.5)'
    } else {
        nav.style.backgroundColor = 'transparent'
        nav.style.boxShadow = 'unset'
    }
})

faqs.forEach(faq => {
    faq.addEventListener('click', e => {
        toggleFAQ(faq)
    })
})