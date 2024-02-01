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