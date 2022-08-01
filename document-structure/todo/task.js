const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");

function addTask() {
  if (taskInput.value.trim() === "") {
    alert("Задача не может быть пустой");
  } else {
    tasksList.insertAdjacentHTML("beforeend", `
      <div class="task">
      <div class="task__title">${taskInput.value}</div>
      <a href="#" class="task__remove">&times;</a>
      </div>
    `);
  };
  taskInput.value = "";
  taskRemove = document.querySelectorAll(".task__remove");
  taskRemove[taskRemove.length - 1].addEventListener("click", removeElem);
};

function addTaskOnEnter(item) {
  if ((13 === item.keyCode)) {
    addTask();
  };
};

taskInput.addEventListener("keyup", addTaskOnEnter);
tasksAdd.addEventListener("click", (e) => {
  addTask();
});

function removeElem(elem) {
  elem.target.closest(".task").remove();
};