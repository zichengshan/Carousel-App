
const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length
const prevEl = document.getElementById("carousel-button-prev")
const nextEl = document.getElementById("carousel-button-next")

prevEl.addEventListener("click", moveToPrevSlide)
nextEl.addEventListener("click", moveToNextSlide)

function moveToPrevSlide(){

    alert("1")
}

function moveToNextSlide() {

    alert("2")
}