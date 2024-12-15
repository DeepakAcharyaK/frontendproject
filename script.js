// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const hamburgerMenu = document.getElementById('hamburgerMenu');

// Open menu
menuIcon.addEventListener('click', () => {
    hamburgerMenu.classList.remove('-translate-x-full');
});

// Close menu
closeIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('-translate-x-full');
});



//gsap
gsap.from('.tagline h1',{
    opacity:0,
    duration:2,
    delay:2
})
gsap.from('.left-navbar h1',{
    opacity:0,
    duration:2,
    delay:1
})
gsap.from('.right-navbar h2',{
    opacity:0,
    duration:2,
    delay:1
})
gsap.from('#menuIcon',{
    opacity:0,
    duration:2,
    delay:1
})
