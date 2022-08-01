const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

xhr.addEventListener("load", function() {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText).data;
    const responseAnswers = response.answers;
    pollTitle.textContent = response.title;

    responseAnswers.forEach(function(item, index) {
      pollAnswers.insertAdjacentHTML("beforeend", `
        <button class="poll__answer">
        </button>
      `);

      const button = document.querySelectorAll("button");
      button[index].textContent = item;

      button[index].onclick = function() {
        confirm("Спасибо, ваш голос засчитан!");
      };
    });
  };
});