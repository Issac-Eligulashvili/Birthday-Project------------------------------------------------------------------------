let subtext = document.querySelector('#subtext');
let main = document.querySelector("#main");
// Lets the user proceed on the site
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        main.classList.remove('hide');
        main.classList.add('animate__fadeInUpBig', 'animate__animated');
        subtext.classList.add('hide');
    }
});

let screenCont = document.querySelector("#screenContainer");
let showing = false
let text = document.querySelector('.text')

function show1() {
    if (showing === false) {
        // show/hide the container
        screenCont.classList.remove('hideCont');
        screenCont.classList.add('showCont');
        showing = true;
        //playing the sounds
        let revealSound = new Audio("/sounds/reveal.mp3");
        revealSound.play()
        revealSound.volume = 0.2
        //showing the info 
        delay = 0;
    } else {
        //hide the container
        screenCont.classList.remove('showCont');
        screenCont.classList.add('hideCont');
        showing = false;
        //playing the hide sound
        let hideSound = new Audio("/sounds/hide.mp3");
        hideSound.play()
        hideSound.volume = 0.2
        setTimeout(showAgain, 2000);
        delay = 2000;
    }

    function changeText1() {
        text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, adipisci qui nemo a ipsum. Aspernatur praesentium explicabo consequuntur possimus blanditiis aliquam vitae dicta autem eligendi aliquid, earum adipisci? Ut molestiae exercitationem quisquam hic culpa delectus ullam, eos dolor omnis ducimus nobis, dolorem tenetur quo rerum commodi voluptates nostrum sint facere, excepturi atque cumque. Veniam in ad autem labore mollitia quae ea laborum harum sequi ipsam quisquam eum molestias quo vel, nisi deleniti natus corporis maiores et? Temporibus, debitis quas libero quos similique esse necessitatibus. Eos sunt laboriosam vitae, fugit odit dignissimos debitis voluptatum corporis laborum facilis nihil dicta? Maxime nulla non quo cumque adipisci ipsam! Quas enim delectus fugit aspernatur doloremque tempora iste, magni facilis earum ipsam exercitationem molestiae nam sequi labore maxime ab quaerat officia ex assumenda? Debitis facilis dolorum incidunt nemo, consequuntur veritatis quis tenetur. Odit facere eligendi excepturi sequi, harum eos molestiae ea repudiandae, aliquid porro ullam perferendis? Ratione eveniet animi reiciendis error ab, rerum, dignissimos dolor maxime cum quae tempora modi illo aut, dolorum eius! Numquam consectetur, iusto perspiciatis quibusdam fugiat incidunt dolores neque omnis quod, veniam provident quaerat facilis quasi ea alias nobis eos repudiandae. Consequatur numquam aliquam quidem vitae atque culpa aliquid delectus 1";
    }

    setTimeout(changeText1, delay)

}

function showAgain() {
    screenCont.classList.remove('hideCont');
    screenCont.classList.add('showCont');
    showing = true;
    let revealSound = new Audio("/sounds/reveal.mp3");
    revealSound.play()
    revealSound.volume = 0.2
}

function show2() {
    if (showing === false) {
        // show/hide the container
        screenCont.classList.remove('hideCont');
        screenCont.classList.add('showCont');
        showing = true;
        //playing the sounds
        let revealSound = new Audio("/sounds/reveal.mp3");
        revealSound.play()
        revealSound.volume = 0.2
        //showing the info 
        delay = 0;
    } else {
        //hide the container
        screenCont.classList.remove('showCont');
        screenCont.classList.add('hideCont');
        showing = false;
        //playing the hide sound
        let hideSound = new Audio("/sounds/hide.mp3");
        hideSound.play()
        hideSound.volume = 0.2
        setTimeout(showAgain, 2000)
        delay = 2000;
    }

    //Change Inner Text 
    function changeText2() {


        text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, adipisci qui nemo a ipsum. Aspernatur praesentium explicabo consequuntur possimus blanditiis aliquam vitae dicta autem eligendi aliquid, earum adipisci? Ut molestiae exercitationem quisquam hic culpa delectus ullam, eos dolor omnis ducimus nobis, dolorem tenetur quo rerum commodi voluptates nostrum sint facere, excepturi atque cumque. Veniam in ad autem labore mollitia quae ea laborum harum sequi ipsam quisquam eum molestias quo vel, nisi deleniti natus corporis maiores et? Temporibus, debitis quas libero quos similique esse necessitatibus. Eos sunt laboriosam vitae, fugit odit dignissimos debitis voluptatum corporis laborum facilis nihil dicta? Maxime nulla non quo cumque adipisci ipsam! Quas enim delectus fugit aspernatur doloremque tempora iste, magni facilis earum ipsam exercitationem molestiae nam sequi labore maxime ab quaerat officia ex assumenda? Debitis facilis dolorum incidunt nemo, consequuntur veritatis quis tenetur. Odit facere eligendi excepturi sequi, harum eos molestiae ea repudiandae, aliquid porro ullam perferendis? Ratione eveniet animi reiciendis error ab, rerum, dignissimos dolor maxime cum quae tempora modi illo aut, dolorum eius! Numquam consectetur, iusto perspiciatis quibusdam fugiat incidunt dolores neque omnis quod, veniam provident quaerat facilis quasi ea alias nobis eos repudiandae. Consequatur numquam aliquam quidem vitae atque culpa aliquid delectus 2";
    }

    setTimeout(changeText2, delay)
}


function show3() {

    let delay = 0;
    if (showing === false) {
        // show/hide the container
        screenCont.classList.remove('hideCont');
        screenCont.classList.add('showCont');
        showing = true;
        //playing the sounds
        let revealSound = new Audio("/sounds/reveal.mp3");
        revealSound.play()
        revealSound.volume = 0.2
        //showing the info 
        delay = 0;

    } else {
        //hide the container
        screenCont.classList.remove('showCont');
        screenCont.classList.add('hideCont');
        showing = false;
        //playing the hide sound
        let hideSound = new Audio("/sounds/hide.mp3");
        hideSound.play()
        hideSound.volume = 0.2
        setTimeout(showAgain, 2000)
        delay = 2000;
    }

    // Change Inner Text

    function changeText3() {
        let text = document.querySelector('.text')

        text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, adipisci qui nemo a ipsum. Aspernatur praesentium explicabo consequuntur possimus blanditiis aliquam vitae dicta autem eligendi aliquid, earum adipisci? Ut molestiae exercitationem quisquam hic culpa delectus ullam, eos dolor omnis ducimus nobis, dolorem tenetur quo rerum commodi voluptates nostrum sint facere, excepturi atque cumque. Veniam in ad autem labore mollitia quae ea laborum harum sequi ipsam quisquam eum molestias quo vel, nisi deleniti natus corporis maiores et? Temporibus, debitis quas libero quos similique esse necessitatibus. Eos sunt laboriosam vitae, fugit odit dignissimos debitis voluptatum corporis laborum facilis nihil dicta? Maxime nulla non quo cumque adipisci ipsam! Quas enim delectus fugit aspernatur doloremque tempora iste, magni facilis earum ipsam exercitationem molestiae nam sequi labore maxime ab quaerat officia ex assumenda? Debitis facilis dolorum incidunt nemo, consequuntur veritatis quis tenetur. Odit facere eligendi excepturi sequi, harum eos molestiae ea repudiandae, aliquid porro ullam perferendis? Ratione eveniet animi reiciendis error ab, rerum, dignissimos dolor maxime cum quae tempora modi illo aut, dolorum eius! Numquam consectetur, iusto perspiciatis quibusdam fugiat incidunt dolores neque omnis quod, veniam provident quaerat facilis quasi ea alias nobis eos repudiandae. Consequatur numquam aliquam quidem vitae atque culpa aliquid delectus 3";
    }

    setTimeout(changeText3, delay)
}

function show4() {

    let delay = 0;
    if (showing === false) {
        // show/hide the container
        screenCont.classList.remove('hideCont');
        screenCont.classList.add('showCont');
        showing = true;
        //playing the sounds
        let revealSound = new Audio("/sounds/reveal.mp3");
        revealSound.play()
        revealSound.volume = 0.2
        //showing the info 
        delay = 0;

    } else {
        //hide the container
        screenCont.classList.remove('showCont');
        screenCont.classList.add('hideCont');
        showing = false;
        //playing the hide sound
        let hideSound = new Audio("/sounds/hide.mp3");
        hideSound.play()
        hideSound.volume = 0.2
        setTimeout(showAgain, 2000)
        delay = 2000;
    }

    // Change Inner Text

    function changeText4() {
        let text = document.querySelector('.text')

        text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, adipisci qui nemo a ipsum. Aspernatur praesentium explicabo consequuntur possimus blanditiis aliquam vitae dicta autem eligendi aliquid, earum adipisci? Ut molestiae exercitationem quisquam hic culpa delectus ullam, eos dolor omnis ducimus nobis, dolorem tenetur quo rerum commodi voluptates nostrum sint facere, excepturi atque cumque. Veniam in ad autem labore mollitia quae ea laborum harum sequi ipsam quisquam eum molestias quo vel, nisi deleniti natus corporis maiores et? Temporibus, debitis quas libero quos similique esse necessitatibus. Eos sunt laboriosam vitae, fugit odit dignissimos debitis voluptatum corporis laborum facilis nihil dicta? Maxime nulla non quo cumque adipisci ipsam! Quas enim delectus fugit aspernatur doloremque tempora iste, magni facilis earum ipsam exercitationem molestiae nam sequi labore maxime ab quaerat officia ex assumenda? Debitis facilis dolorum incidunt nemo, consequuntur veritatis quis tenetur. Odit facere eligendi excepturi sequi, harum eos molestiae ea repudiandae, aliquid porro ullam perferendis? Ratione eveniet animi reiciendis error ab, rerum, dignissimos dolor maxime cum quae tempora modi illo aut, dolorum eius! Numquam consectetur, iusto perspiciatis quibusdam fugiat incidunt dolores neque omnis quod, veniam provident quaerat facilis quasi ea alias nobis eos repudiandae. Consequatur numquam aliquam quidem vitae atque culpa aliquid delectus 4";
    }

    setTimeout(changeText4, delay)
}

function show5() {

    let delay = 0;
    if (showing === false) {
        // show/hide the container
        screenCont.classList.remove('hideCont');
        screenCont.classList.add('showCont');
        showing = true;
        //playing the sounds
        let revealSound = new Audio("/sounds/reveal.mp3");
        revealSound.play()
        revealSound.volume = 0.2
        //showing the info 
        delay = 0;

    } else {
        //hide the container
        screenCont.classList.remove('showCont');
        screenCont.classList.add('hideCont');
        showing = false;
        //playing the hide sound
        let hideSound = new Audio("/sounds/hide.mp3");
        hideSound.play()
        hideSound.volume = 0.2
        setTimeout(showAgain, 2000)
        delay = 2000;
    }

    // Change Inner Text

    function changeText5() {
        let text = document.querySelector('.text')

        text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, adipisci qui nemo a ipsum. Aspernatur praesentium explicabo consequuntur possimus blanditiis aliquam vitae dicta autem eligendi aliquid, earum adipisci? Ut molestiae exercitationem quisquam hic culpa delectus ullam, eos dolor omnis ducimus nobis, dolorem tenetur quo rerum commodi voluptates nostrum sint facere, excepturi atque cumque. Veniam in ad autem labore mollitia quae ea laborum harum sequi ipsam quisquam eum molestias quo vel, nisi deleniti natus corporis maiores et? Temporibus, debitis quas libero quos similique esse necessitatibus. Eos sunt laboriosam vitae, fugit odit dignissimos debitis voluptatum corporis laborum facilis nihil dicta? Maxime nulla non quo cumque adipisci ipsam! Quas enim delectus fugit aspernatur doloremque tempora iste, magni facilis earum ipsam exercitationem molestiae nam sequi labore maxime ab quaerat officia ex assumenda? Debitis facilis dolorum incidunt nemo, consequuntur veritatis quis tenetur. Odit facere eligendi excepturi sequi, harum eos molestiae ea repudiandae, aliquid porro ullam perferendis? Ratione eveniet animi reiciendis error ab, rerum, dignissimos dolor maxime cum quae tempora modi illo aut, dolorum eius! Numquam consectetur, iusto perspiciatis quibusdam fugiat incidunt dolores neque omnis quod, veniam provident quaerat facilis quasi ea alias nobis eos repudiandae. Consequatur numquam aliquam quidem vitae atque culpa aliquid delectus 5";
    }

    setTimeout(changeText5, delay)
}

