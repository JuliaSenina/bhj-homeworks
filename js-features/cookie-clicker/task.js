const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
image.onclick = function() {
  image.width = ++clickerCounter.textContent % 2 ? 250 : 200;
};