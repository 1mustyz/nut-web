const bars = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav-list');
const plus = document.querySelector('.opener');
const minus = document.querySelector('.fa-minus');
const blogDetail = document.querySelector('.blog-details');
const headerBody = document.querySelector('.header-body');
const blogNav = document.querySelector('.blog');
const blogNavLink = document.querySelector('.blog-nav-link');

const nav = document.querySelector('.nav');
const dropDowns = document.querySelector('.drop-downs');
const projectImage = document.querySelectorAll('.our-project-image');
const projectDescription = document.querySelectorAll('.our-project-description');
const teamCard = document.querySelectorAll('.our-team-card')

bars.addEventListener('click', ()=>{
    console.log('hello');
    navList.classList.toggle('togle-display');
    headerBody.classList.toggle('togle-display')
});

plus.addEventListener('click', ()=>{
    console.log('hello');
    
    console.log(plus.classList[2])
    
    if(plus.classList[2] == 'fa-plus'){
        blogDetail.classList.remove('togle-display');
        plus.classList.remove('fa-plus');
        plus.classList.add('fa-minus');
    }else {
        blogDetail.classList.add('togle-display');
        plus.classList.remove('fa-minus');
        plus.classList.add('fa-plus');
    }
        
    
});

if(minus){

    minus.addEventListener('click', ()=>{
        console.log('hello');
        minus.classList.remove('fa-minus');
        minus.classList.add('fa-plus');
    
    });
}

blogNavLink.addEventListener('mouseenter', ()=>{
    console.log('mose enter');
    blogNav.classList.remove('togle-display');
});

blogNavLink.addEventListener('mouseleave', ()=>{
    console.log('mose enter');
    blogNav.addEventListener('mouseleave', ()=>{
        blogNav.classList.add('togle-display');
    });
   
    
});

window.addEventListener('scroll', (e) => {
    
    const currentScroll = window.pageYOffset

    currentScroll > 32
        ? nav.classList.add('nav-scroll')
            ? dropDowns.classList.remove('drop-downs-scroll')
            : ''
        : nav.classList.remove('nav-scroll');
});

projectImage.forEach(image => {
    image.addEventListener('mouseenter',(e)=>{
        console.log(e.currentTarget)
        e.currentTarget.classList.add('togle-display');
        e.currentTarget.nextElementSibling.classList.remove('togle-display');
    });

   
});

projectDescription.forEach(description => {
    description.addEventListener('mouseleave', (e) => {
        console.log(e.currentTarget)
        e.currentTarget.classList.add('togle-display');
        e.currentTarget.previousElementSibling.classList.remove('togle-display');
    })
})

teamCard.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        console.log(e.currentTarget.children[1])
        e.currentTarget.children[1].classList.remove('togle-display');
    })

    card.addEventListener('mouseleave', (e) => {
        console.log(e.currentTarget.children[1])
        e.currentTarget.children[1].classList.add('togle-display');
    })
})