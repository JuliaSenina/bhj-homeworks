const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
image.onclick = function() {
  clickerCounter.textContent++;
  if (parseInt(clickerCounter.textContent) % 2 === 0) {
    image.width = 200;
  } else {
    image.width = 250;
  };
};