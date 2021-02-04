const bars = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav-list');

bars.addEventListener('click', ()=>{
    console.log('hello');
    navList.classList.toggle('togle-display');
});