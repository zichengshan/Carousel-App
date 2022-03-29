
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
    if(slidePosition === totalSlides - 1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    hideAllSlides()
    slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllSlides() {
    for (let i = 0; i < totalSlides; i++){
        slides[i].classList.remove("carousel-item-visible")
        slides[i].classList.add("carousel-item-hidden")
    }
}