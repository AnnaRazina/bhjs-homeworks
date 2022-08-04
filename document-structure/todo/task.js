let taskInput = document.getElementById("task__input");
let tasksAdd = document.getElementById("tasks__add");
let tasksList = document.getElementById("tasks__list");

let addingTask = () => {
    tasksList.innerHTML += `
          <div class="task">
            <div class="task__title">
            ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`;
        taskInput.value = "";    
}
let taskRemove;
let remove = () => {taskRemove = Array.from(tasksList.children);
    if (taskRemove.length > 0) {
    taskRemove.forEach(el => {el.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.closest(".task").remove()
        })})
    }
}
let tasksAddButton = () => {tasksAdd.addEventListener("click", (event) => {
    if (taskInput.value.trim().length > 0) {
        event.preventDefault();
        addingTask() 
    }
    remove();
  })
}; tasksAddButton();
let tasksAddEnter = () => {taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && taskInput.value.trim().length > 0) {
          event.preventDefault();
          addingTask();
      } 
      remove()    
  })
}; tasksAddEnter();