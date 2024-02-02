let subtext = document.querySelector('#subtext');
let main = document.querySelector("#main");
// Lets the user proceed on the site
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        main.classList.remove('hide');
        main.classList.add('animate__fadeInUpBig' , 'animate__animated');
        subtext.classList.add('hide');
    }
  });

let screenCont = document.querySelector("#screenContainer");
let showing = false

function show1() {
    let infoDiv1 = document.querySelector('#info1');
    if (showing === false) {
    screenCont.classList.remove('hideCont');
    screenCont.classList.add('showCont');  
    showing = true; 
    let revealSound = new Audio("/sounds/reveal.mp3");
    revealSound.play()
    revealSound.volume = 0.2

    } else {
        screenCont.classList.remove('showCont');
        screenCont.classList.add('hideCont');  
        showing = false;
        let hideSound = new Audio("/sounds/hide.mp3");
    hideSound.play()
    hideSound.volume = 0.2
    }
    
}

