let circle = document.querySelector(".circle")

let interaction = true;

circle.addEventListener("click", function() {

    clickedanim()
    UpdateValue(1)
    randomSound()
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