const countDown = function() {
  const timer = document.getElementById("timer");
  timer.textContent--;

  if (timer.textContent === "0") {
    clearInterval(interval);
    alert ("Вы победили в конкурсе!");
  };
};
const interval = setInterval(countDown, 1000);