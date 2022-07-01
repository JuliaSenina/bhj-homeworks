const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");

sliderArrowNext.onclick = function() {
  let index = sliderItem.findIndex((id) => id.className.includes("slider__item_active"));
  sliderItem[index].className = "slider__item";
  index = index + 1;
  if (index > (sliderItem.length - 1)) {
    index = 0;
  };

  sliderItem[index].className = "slider__item slider__item_active";
};

sliderArrowPrev.onclick = function() {
  let index = sliderItem.findIndex((id) => id.className.includes("slider__item_active"));
  sliderItem[index].className = "slider__item";
  index = index - 1;
  if (index < 0) {
    index = sliderItem.length - 1;
  };

  sliderItem[index].className = "slider__item slider__item_active";
};
