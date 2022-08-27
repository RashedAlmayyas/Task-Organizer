const createTaskHtml = (
  id,
  taskName,
  taskDescription,
  status
) =>
  `<div class="card shadow p-2 mb-4 bg-white m-2" style="width: 18rem" data-task-id=${id}>
          <div class="card-body" >
            <h5 class="card-title">${taskName}</h5>
            <p class="card-text">
              ${taskDescription}
            </p>
          </div>
          <ul class="list-group list-group-flush">
                  <li class="list-group-item status-label">
              Status:
              <span class="status">${status}</span>
            </li>
          </ul>
       <div class="card-body">
     
      <button class="btn btn-success done-button ${
        status === "DONE" ? "invisible" : "visible"
      }">Done</button>
            <button type="button" class="btn btn-danger delete-button ">Delete</button>

            <button type="button" class="btn btn-primary edit-button" data-toggle="modal" data-target="#createTaskModal"id="editTaskButton">Edit</button>
          </div>
        </div>
      </div>`;

class TaskManager {
  constructor(currentId = "0") {
    this._tasks = [];
    this._currentId = currentId;
  }
  addTask(taskName, taskDescription,status = "Critical") {
    const newTask = {
      id: this._currentId++,
      taskName: taskName,
      taskDescription: taskDescription,
      status: status,
    };
    this._tasks.push(newTask);
  }

  editTask(editedTask, taskName, taskDescription,  status) {
    editedTask.taskName = taskName;
    editedTask.taskDescription = taskDescription;
       editedTask.status = status;
  }

  deleteTask(taskId) {
    const newTasks = [];
    {
      for (let i = 0; i < this._tasks.length; i++) {
        let task = this._tasks[i];
        if (task.id !== taskId) {
          newTasks.push(task);
        }
      }
      this._tasks = newTasks;
    }
  }
  getTaskById(taskId) {
    let foundTask;

    for (let i = 0; i < this._tasks.length; i++) {
      const task = this._tasks[i];
      if (taskId === task.id) {
        foundTask = task;
      }
    }
    return foundTask;
  }

  render() {
    const tasksHtmlList = [];

    for (let i = 0; i < this._tasks.length; i++) {
      const newTask = this._tasks[i];

      const taskHtml = createTaskHtml(
        newTask.id,
        newTask.taskName,
        newTask.taskDescription,
        newTask.status
      );
      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join("\n");
    cardContainer.innerHTML = tasksHtml; 
  }

  save() {
    let tasksJson = JSON.stringify(this._tasks); 
    localStorage.setItem("tasks", tasksJson);
    let currentId = String(this._currentId);
    localStorage.setItem("currentId", currentId);
  }
 
  load() {
    if (localStorage.getItem("tasks")) {
      const tasksJson = localStorage.getItem("tasks");
      this._tasks = JSON.parse(tasksJson);
    }
    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId"); 
      this._currentId = Number(currentId); 
    }
  }
}

if (typeof module != "undefined") {
  module.exports = TaskManager;
}
