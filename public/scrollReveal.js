import ScrollReveal from 'scrollreveal'

document.addEventListener('DOMContentLoaded', () =>{
    ScrollReveal().reveal('.reveal',{
        delay:300,
        duration:1600,
        distance:'150px',
        origin:'bottom',
        reset: true,
        opacity: 0,
        easing: 'ease-out',
        viewFactor: 0.3

    })
})