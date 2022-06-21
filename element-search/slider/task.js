const sliderItem = document.querySelectorAll(".slider__item");
const sliderArrow = Array.from(document.querySelectorAll(".slider__arrow"));

for (let i = 0; i < sliderArrow.length; i++) {
    sliderArrow[i].onclick = function() {
    sliderArrow.className = "slider__item slider__item_active";
  };
};