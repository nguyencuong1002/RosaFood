const selectElement = function(element){
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',() =>{
    body.classList.toggle('open');
});

//Scrool Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration:1000,
    distance:'25rem',
    delay:300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
});

//Parallax scrolling effect
window.addEventListener('scroll', ()=>{
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * .7 + 'px';
});