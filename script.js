let circle = document.querySelector(".circle")

let interaction = true;

circle.addEventListener("click", function() {

    clickedanim()
    UpdateValue(1)
    randomSound()
    playVideo()
    randomColor()
})

let counter = document.querySelector(".counter")

function clickedanim() {
    circle.classList.add("clicked")
    let t = setTimeout(() => {
        circle.classList.remove("clicked")
    }, 100);


}

function randomSound() {
    let random = Math.random();
    let index = Math.floor(random * 10) % 5
    console.log(AudioArray[index])
    AudioArray[index].play();
}

let clickvalue = 1

function UpdateValue(value) {
    counter.innerHTML = +counter.innerHTML + value
}
let AudioArray = [];

let comSound = new Audio('./audio/com.mp3')
let dollarSound = new Audio('./audio/dollar.mp3')
let popSound = new Audio('./audio/pop.mp3')
let ppoSound = new Audio('./audio/ppo.mp3')
let travisSound = new Audio('./audio/travis.mp3')

travisSound.autoplay = false;
comSound.autoplay = false;
dollarSound.autoplay = false;
popSound.autoplay = false;
ppoSound.autoplay = false;

AudioArray.push(comSound)
AudioArray.push(dollarSound)
AudioArray.push(popSound)
AudioArray.push(ppoSound)
AudioArray.push(travisSound)

console.log(AudioArray)

// video

const video = document.querySelector('video');
video.play();

let timeOutVideo;

let videoArr = [];
let whistle = document.querySelector('video.whistle');
let daniel = document.querySelector('video.daniel');
let griffin = document.querySelector('video.griffin');
let scream = document.querySelector('video.scream');

videoArr.push(whistle);
videoArr.push(daniel);
videoArr.push(griffin);
videoArr.push(scream);

function playVideo() {
    let index = Math.floor(Math.random() * 10) % videoArr.length;
    console.log(index);
    let video = videoArr[index];
    if (Math.floor(Math.random() * 100) % 100 <= 10) {
        video.classList.add('active');
        video.muted = false;
        video.play();
        timeOutVideo = setTimeout(() => {
            video.muted = true;
            video.pause();
            video.classList.remove('active');
            video.currentTime = 0

        }, video.duration * 1000);

    }

}

function randomColor() {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    circle.style.background = "rgb(" + r + "," + g + "," + b + ")"
}