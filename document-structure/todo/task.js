const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");

function addTask() {
  tasksList.insertAdjacentHTML("beforeend", `
    <div class= "task">
    <div class="task__title">${taskInput.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>
  `);
  tasksList.querySelector(".task__remove").onclick = function name() {
    this.closest(".task").remove();
  };
  taskInput.value = "";
}

tasksAdd.addEventListener("click", (elem) => {
  elem.preventDefault();

  if (taskInput.value.trim() !== "") {
    addTask(taskInput.value);
  } else {
    alert("Задача не может быть пустой");
  };
});