const taskManager = new TaskManager();

taskManager.load();


const cardContainer = document.querySelector("#card-container");

taskManager.render();

const newTaskForm = document.querySelector("#newTaskForm");
const taskModalTitle = document.querySelector("#createTaskModalLabel");
let taskFormMode;
let editedTask;

const createTaskButton = document.querySelector("#createTaskButton");
createTaskButton.addEventListener("click", () => {
  taskFormMode = "add";
  taskModalTitle.innerHTML = "Create Task";
});

const newTaskNameInput = document.querySelector("#newTaskNameInput");
const newTaskDescription = document.querySelector("#newTaskDescription");
const newTaskStatus = document.querySelector("#newTaskStatus");
const formErrorMessage = document.querySelector("#formErrorMessage");

let taskModal = document.getElementById("createTaskModal");

newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = newTaskNameInput.value;
  const taskDescription = newTaskDescription.value;
  const status = newTaskStatus.value;

  if (!validFormFieldInput(taskName)) {
    errorMessage("task name");
  
  } else if (!validFormFieldInput(taskDescription)) {
    errorMessage("description");
  } else {
    formErrorMessage.style.display = "none";
    if (taskFormMode === "add") {
      taskManager.addTask(
        taskName,
        taskDescription,
        status
      );
    }

    if (taskFormMode === "edit") {
      taskManager.editTask(
        editedTask,
        taskName,
        taskDescription,
     
        status
      );
      taskFormMode = "add";
      taskModalTitle.innerHTML = "Create Task";
      $("#createTaskModal").modal("toggle");
    }

    taskManager.save();

    taskManager.render();

    newTaskForm.reset();
  }
});

function errorMessage(input) {
  formErrorMessage.innerHTML = `Invalid ${input}. Please correct.`;
  formErrorMessage.style.display = "block";
  formErrorMessage.style.color = "text-danger";
}

function validFormFieldInput(data) {
  return data !== null && data !== "";
}



cardContainer.addEventListener("click", (event) => {
  const parentTask = event.target.parentElement.parentElement;
  const taskId = Number(parentTask.dataset.taskId);

  if (event.target.classList.contains("done-button")) {
    const task = taskManager.getTaskById(taskId);
    task.status = "DONE";
  }
  
  if (event.target.classList.contains("edit-button")) {
  
    taskFormMode = "edit";
    taskModalTitle.innerHTML = "Edit Task";

    editedTask = taskManager.getTaskById(taskId);

    newTaskNameInput.value = editedTask.taskName;
    newTaskDescription.value = editedTask.taskDescription;
    newTaskStatus.value = editedTask.status;
  }

  if (event.target.classList.contains("delete-button")) {
    taskManager.deleteTask(taskId);
  }

  taskManager.save();
  taskManager.render();
});
