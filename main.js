// ADICIONAR SHADOWS NO HEADER AO ROLAR PAGINA AO DAR SCROLL
const header = document.querySelector('#menu')

console.log(header)
const navHeight = header.offsetHeight
console.log(navHeight);
console.log(window.scrollY);

function changeHeaderWhenScroll() {
    if (window.scrollY >= 700) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    // pegando o deslocamento da pagina + o tamnho da pagina dividido por 8 e dos 8 pegando apenas 2 pedaços
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 3

    for (section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        const checkpointStart = checkpoint >= sectionTop
        const chepointEnd = checkpoint <= sectionTop + sectionHeight
        console.log(sectionId);
        // document.querySelector("menu  ul  li  a")
        // console.log(document.querySelector(`.container nav ul li a[href*=about]`));
        if (checkpointStart && chepointEnd) {
            document
                .querySelector(`.container nav ul li a[href*=${sectionId}]`)
                .classList.add('active')
        } else {
            document
                .querySelector(`nav ul li a[href*=${sectionId}]`)
                .classList.remove('active')
        }

    }
}
// COnfigurando animação da biblioteca scrollreveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '2em',
    duration: 600,
    reset: true
})

// atribuindo os elementos da animação
scrollReveal.reveal(
    `
    #about .spot p, #about span,
    #techs h2, #techs p, #techs ul,
    #projects h2, #projects p, #projects .card,
    #contact h2, #contact p, #contact li,
    footer p, footer address
`, { interval: 90}
)

window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    activateMenuAtCurrentSection()
    

})


