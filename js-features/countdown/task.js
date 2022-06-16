const countDown = function() {
  const timer = document.getElementById("timer");
  timer.textContent--;

  if (timer.textContent === "0") {
    clearInterval(intervalId);
    alert ("Вы победили в конкурсе!");
  };
};
const intervalId = setInterval(countDown, 1000);