let circle = document.querySelector(".circle")
circle.addEventListener("click", function() {
    clickedanim()
    UpdateValue(1)
})

let counter = document.querySelector(".counter")

function clickedanim() {
    circle.classList.add("clicked")
    let t = setTimeout(() => {
        circle.classList.remove("clicked")
    }, 100);

}

let clickvalue = 1

function UpdateValue(value) {
    counter.innerHTML = +counter.innerHTML + value
}