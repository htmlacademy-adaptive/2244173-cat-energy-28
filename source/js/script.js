let mainHeader = document.querySelector('.page-header');
let headerToggle = document.querySelector('.page-header__logo-toggle');

mainHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('page-header--closed')) {
    mainHeader.classList.remove('page-header--closed');
    mainHeader.classList.add('page-header--opened');
  } else {
    mainHeader.classList.add('page-header--closed');
    mainHeader.classList.remove('page-header--opened');
  }
});

document.documentElement.lang = "ru";
document.documentElement.classList.add("page");

const slider = document.querySelector(".slider");
const curtain = slider.querySelector(".slider__curtain");
let sliderStyles = getComputedStyle(slider);
let curtainPlaceStart
let clientX

window.addEventListener("pointerup", stopTheCurtainShifting);
curtain.addEventListener("pointerdown", startTheCurtainShifting);

function startTheCurtainShifting (event) {
curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"))
clientX = event.clientX
window.addEventListener("pointermove", shiftТheСurtain)
}

function shiftТheСurtain (event) {
let deltaX = event.clientX - clientX
let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth
let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1)
slider.style.setProperty("--curtain-place", `${curtainPlace}`)
}

function stopTheCurtainShifting () {
window.removeEventListener("pointermove", shiftТheСurtain);
}
