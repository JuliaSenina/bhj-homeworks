const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");

for (let i = 0; i < sliderItem.length; i++) {
  const index = sliderItem.findIndex(() => {
   if (sliderItem[i].className.includes("slider__item_active")) {
      sliderItem[i].className = "slider__item";
    };
  })

  sliderArrowNext.onclick = function() {
  const indexNext = index > sliderItem.length - 1 ? i++ : 0;
  sliderItem[indexNext].className = "slider__item slider__item_active";
  }


sliderArrowPrev.onclick = function() {
  const indexPrev = index <= 0 ? i-- : i = sliderItem.length;
  sliderItem[indexPrev].className = "slider__item slider__item_active";
}
};