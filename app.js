const mainNav = document.querySelector('.main-nav')
const hamburger = document.querySelector('.hamburger-menu');


hamburger.addEventListener('click', function(){
  mainNav.classList.toggle('open');
});

gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration: 1, scaleX: 1});