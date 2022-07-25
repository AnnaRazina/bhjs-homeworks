const sliders = Array.from(document.querySelectorAll("div .slider__item"));
let sliderArrowPrev = document.querySelectorAll(".slider__arrow_prev");
let sliderArrowNext = document.querySelectorAll(".slider__arrow_next");

let activeItemindex;
let activeItem = () => { 
    activeItemindex = sliders.indexOf(document.querySelector(".slider__item_active"));
return activeItemindex;
}; activeItem();

let removeSliderItemActive = () => {
    sliders[activeItemindex].classList.remove("slider__item_active")
}

function nextSlide() {
    removeSliderItemActive();
    if(activeItemindex === (sliders.length - 1)){
        sliders[0].classList.add("slider__item_active");
        activeItem()
    } else {
    sliders[activeItemindex += 1].classList.add("slider__item_active")
    }
}

function nextSlideremove() {
    removeSliderItemActive();
    if (activeItemindex === 0) {
        sliders[sliders.length - 1].classList.add("slider__item_active");
        activeItem()
    } else{
    
    sliders[activeItemindex -= 1].classList.add("slider__item_active")
    }
}

sliderArrowNext[0].addEventListener("click", nextSlide);
sliderArrowPrev[0].addEventListener("click", nextSlideremove);