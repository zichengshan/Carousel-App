
const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length
const prevEl = document.getElementById("carousel-button-prev")
const nextEl = document.getElementById("carousel-button-next")
const positionEl = document.getElementById("text")

prevEl.addEventListener("click", moveToPrevSlide)
nextEl.addEventListener("click", moveToNextSlide)

positionEl.innerText = `Slide ${slidePosition+1}`
function moveToPrevSlide(){
    slidePosition--;
    if(slidePosition < 0) {
        slidePosition = totalSlides-1
    }
    hideAllSlides()
    positionEl.innerText = `Slide ${slidePosition+1}`
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToNextSlide() {
    if(slidePosition === totalSlides - 1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    hideAllSlides()
    positionEl.innerText = `Slide ${slidePosition+1}`
    slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllSlides() {
    for (let i = 0; i < totalSlides; i++){
        slides[i].classList.remove("carousel-item-visible")
        slides[i].classList.add("carousel-item-hidden")
    }
}