
const iconClose = document.querySelector('.icon-close');
const iconOpen = document.querySelector('.icon-open');
const nav = document.querySelector('.nav__list');

iconOpen.addEventListener('click', () => {
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    nav.classList.remove('hidden');
    nav.classList.remove('animate-slide-up');
    nav.classList.add('animate-slide-down');
})

iconClose.addEventListener('click', () => {
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    nav.classList.add('hidden');
    nav.classList.remove('animate-slide-down');
})