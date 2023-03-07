const popup = document.querySelector('.popup');
const btn = document.querySelector('.banner__button-explore');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    popup.classList.add('open');
})

close.addEventListener('click' , () => {
    popup.classList.remove('open')
})