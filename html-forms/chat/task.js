const chatWidget = document.querySelector(".chat-widget");
const chatWidgetSide = document.querySelector(".chat-widget__side");

chatWidgetSide.onclick = function() {
  chatWidget.classList.add("chat-widget_active");
};

const form = document.querySelector("input");
const robotMessages = ["Я занят", "Отстань!", "Не хочу с тобой общаться", "Ой, всё", "Бла-бла-бла"];

form.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && form.value.length > 0) {
    const messages = document.querySelector(".chat-widget__messages");
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time"></div>
      <div class="message__text"></div>
    </div>
    <div class="message">
      <div class="message__time"></div>
      <div class="message__text"></div>
    </div>
    `;

    const message = Array.from(document.querySelectorAll(".message"));
    const time = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});

    message.forEach(function(idx) {
      if (idx.classList.contains("message_client")) {
        idx.children[0].textContent = time;
        idx.children[1].textContent = form.value;  
      } else {
        idx.children[0].textContent = time;
        const randomRobotMessage = Math.floor(Math.random() * robotMessages.length);
        idx.children[1].textContent = robotMessages[randomRobotMessage];
      };
    });
  };
});

/*form.addEventListener("submit", event => {
    event.preventDefault();
    const clearForm = event.currentTarget;
    clearForm.reset();
});*/