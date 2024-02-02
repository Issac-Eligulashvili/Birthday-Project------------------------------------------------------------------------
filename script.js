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
let showing = false;
let text = document.querySelector('.text');
let image = document.querySelector('.img-1');

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
        text.innerText = " November 8th, 1895, the first person to observe X-rays was the German physicist Wilhelm Conrad Roentgen. On that historic day, Roentgen was conducting experiments with cathode-ray tubes in his laboratory. To his surprise, he noticed that a screen coated with barium platinocyanide, placed nearby, emitted a fluorescent glow when the cathode rays were turned on. Further investigation led Roentgen to the discovery of a previously unknown form of electromagnetic radiation, which he named X-rays due to their mysterious nature. Roentgen's groundbreaking work revolutionized medical imaging and earned him the first Nobel Prize in Physics in 1901. His accidental discovery paved the way for the development of X-ray technology, profoundly impacting fields ranging from medicine to industry.";

        image.src = '/images/x-ray.jpg'
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


        text.innerText = "On November 8th, 1960, John F. Kennedy secured a historic victory in the U.S. presidential election, becoming the 35th President of the United States. In a closely contested race against his Republican opponent, Richard Nixon, Kennedy's charisma and vision resonated with the American public. At 43, he became the youngest elected president and the first Roman Catholic to hold the office. Kennedy's presidency marked a period of optimism and change, encapsulated in his famous inaugural address that urged citizens to 'ask not what your country can do for you  ask what you can do for your country.' His administration confronted significant challenges, including the Cuban Missile Crisis and the Civil Rights Movement. Kennedy's leadership and tragic assassination in 1963 left an indelible mark on American history and politics.";

        image.src = '/images/jfk.jpg'
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

        text.innerText = " On November 8, 1971, the legendary rock band Led Zeppelin released their fourth studio album, titled 'Led Zeppelin IV.' This iconic album showcased the band's musical versatility and included some of their most enduring tracks, such as ;Stairway to Heaven,' 'Black Dog,' and 'Rock and Roll.' 'Led Zeppelin IV' is widely regarded as a masterpiece, blending blues, folk, and hard rock influences. The album's cover art, featuring a cryptic symbol, added an air of mystique. With its innovative sound and enduring popularity, 'Led Zeppelin IV' continues to be celebrated as a cornerstone of classic rock and a testament to the band's unparalleled musical prowess.";

        image.src = '/images/Led_Zeppelin_-_Led_Zeppelin_IV.jpg'
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

        text.innerText = "On November 8, 1519, Hernán Cortés and his Spanish expeditionary force made a pivotal entry into Tenochtitlán, the majestic capital of the Aztec Empire. This marked a crucial moment in the Spanish conquest of the Aztecs, a highly advanced Mesoamerican civilization. Led by Emperor Moctezuma II, the Aztecs initially welcomed Cortés, unaware of the impending upheaval that would follow. The encounter between these two worlds would lead to a series of conflicts, culminating in the eventual fall of Tenochtitlán in 1521. Cortés' expedition significantly altered the course of history, as the conquest paved the way for Spanish colonization in the Americas, fundamentally transforming the cultural, political, and social landscape of the region.";

        image.src = '/images/attack-on-aztecs.jpg'
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

        text.innerText = "On November 8, 2013, Typhoon Haiyan, one of the most powerful tropical cyclones in recorded history, unleashed its fury upon the Philippines, making devastating landfall. With wind speeds reaching up to 195 miles per hour and an unprecedented storm surge, Haiyan left a trail of unparalleled destruction in its wake. Entire communities were flattened, and crucial infrastructure was obliterated, leading to a humanitarian crisis of immense proportions. The aftermath of Typhoon Haiyan resulted in an overwhelming loss of life, with thousands of casualties reported. The international community rallied to provide aid and support to the affected regions, but the event underscored the urgent need for global efforts to mitigate the impact of extreme weather events and strengthen resilience in vulnerable communities."
        image.src = '/images/typhhon.jpg'
    }

    setTimeout(changeText5, delay)
}

