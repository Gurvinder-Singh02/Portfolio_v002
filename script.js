// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.nav-belt-right');

// menu.onclick =() =>{
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('open');
// }
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Graphic Desinger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Web developer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

const sr = ScrollReveal({
    distance : '65px',
    duration : 2600,
    delay : 250,
    reset : true
});

sr.reveal('.card-title',{delay : 150 , origin : 'left'});
sr.reveal('.card-gxuri',{delay : 150 , origin : 'right'});
sr.reveal('.card-cc',{delay : 150 , origin : 'bottom'});
sr.reveal('.card-pp',{delay : 150 , origin : 'top'});
sr.reveal('.nav-belt',{delay : 150 , origin : 'top'});
sr.reveal('.project-line',{delay : 150 , origin : 'left'});
sr.reveal('.Animate-col',{delay : 150 , origin : 'bottom'});
sr.reveal('.Animate-col2',{delay : 150 , origin : 'top'});
sr.reveal('.Animate-col4',{delay : 150 , origin : 'left'});
sr.reveal('.Animate-col5',{delay : 150 , origin : 'right'});



// // Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
var textWrapper = document.querySelector('.ml4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//   setTimeout(() => {
//     const box = document.getElementById('box');
  
//     // 👇️ removes element from DOM
//     box.style.opacity = 0;

//     // 👇️ hides element (still takes up space on page)
//     // box.style.visibility = 'hidden';
//   }, 1000);