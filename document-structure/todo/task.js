const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");

taskInput.addEventListener("keyup", function() {
  if (taskInput.value.length > 0) {
    tasksAdd.onclick = function() {
      tasksList.insertAdjacentHTML("beforeend", `
        <div class="task">
        <div class="task__title"></div>
        <a href="#" class="task__remove">&times;</a>
        </div>
      `);

      const task = document.getElementsByClassName("task");
      const taskTitle = Array.from(document.getElementsByClassName("task__title"));
      taskTitle.forEach(function(item) {
        if (item.textContent.length === 0) {
          item.textContent = taskInput.value;
        };
      });
      taskInput.value = "";

      const taskRemove = Array.from(document.getElementsByClassName("task__remove"));
      taskRemove.forEach(function(item) {
        item.onclick = function() {
          taskRemoveIndex = taskRemove.indexOf(item);
          task[taskRemoveIndex].remove();
          taskRemove.splice(taskRemoveIndex, 1);
        };
      });
      return false;
    };
  };
});