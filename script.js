// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.nav-belt-right');

// menu.onclick =() =>{
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('open');
// }

const sr = ScrollReveal({
    distance : '65px',
    duration : 2600,
    delay : 450,
    reset : true
});

sr.reveal('.card-title',{delay : 200 , origin : 'left'});
sr.reveal('.card-gxuri',{delay : 450 , origin : 'right'});
sr.reveal('.card-cc',{delay : 950 , origin : 'bottom'});
sr.reveal('.nav-belt',{delay : 950 , origin : 'top'});