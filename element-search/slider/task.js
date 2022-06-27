const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");

function sliderDeactive (index) {
  if (index === true) {
    sliderItem[index].className = "slider__item";
  };
};

sliderArrowNext.onclick = function() {
  let index = sliderItem.findIndex((id) => {
    if (id.className.includes("slider__item_active")) {
      return id;
    };
  });

  sliderDeactive;

  index = index + 1;
  if (index > (sliderItem.length - 1)) {
    index = 0;
  };

  sliderItem[index].className = "slider__item slider__item_active";
};

sliderArrowPrev.onclick = function() {
  let index = sliderItem.findIndex((id) => {
    if (id.className.includes("slider__item_active")) {
      return id;
    };
  });

  sliderDeactive;

  index = index --;
  if (index <= 0) {
    index = sliderItem.length - 1;
  };

  sliderItem[index].className = "slider__item slider__item_active";
}
