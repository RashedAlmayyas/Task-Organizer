var todolist = document.querySelector(".todo__list");
var inputBtn = document.querySelector('input[name="add"]');
var plusBtn = document.getElementById("plus");
var filter = document.querySelector(".filter");
var max_id = 3;

window.onload = function () {
  let deleteIcons = document.querySelectorAll(".item__trash-can");

  deleteIcons.forEach((node, index) => {
    node.addEventListener("click", (e) => {
      todolist.removeChild(e.target.parentElement);
    });
  });

  filterTodo(filter.value);
};

function addTodo(inputVal) {
  let item = document.createElement("LI");
  let inputCheckbox = document.createElement("INPUT");
  let label = document.createElement("LABEL");
  let customCheckbox = document.createElement("SPAN");
  let labelWord = document.createElement("SPAN");
  let checkPointer = document.createElement("I");
  let trashCan = document.createElement("I");

  // increment max id
  let newID = (max_id += 1);

  // outer <li> initialize
  item.setAttribute("class", "todo__item");

  // checkbox input initialize
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("id", `todo-${newID}`);
  inputCheckbox.addEventListener("change", (e) => {
    handleCheck(`todo-${newID}`);
  });

  // label initialize
  label.setAttribute("for", `todo-${newID}`);
  // customized checkbox
  customCheckbox.setAttribute("class", "check__box");
  // label word
  labelWord.setAttribute("class", "item__title");
  labelWord.textContent = inputVal;

  // check pointer
  checkPointer.setAttribute("class", "far fa-check check__pointer");
  // delete trash can
  trashCan.setAttribute("class", "fas fa-trash-alt item__trash-can");

  // combine elements
  customCheckbox.appendChild(checkPointer);

  label.appendChild(customCheckbox);
  label.appendChild(labelWord);

  item.appendChild(inputCheckbox);
  item.appendChild(label);
  item.appendChild(trashCan);
  if (filter.value === "completed") item.classList.add("invisible");

  todolist.appendChild(item);

  trashCan.addEventListener("click", (e) => {
    todolist.removeChild(e.target.parentElement);
  });
}

function filterTodo(filterType) {
  let Todos = document.querySelectorAll(".todo__item");

  Todos.forEach((item, index) => {
    let checkbox = item.querySelector('input[type="checkbox"]');

    if (filterType === "all") {
      item.classList.remove("invisible");
    } else if (filterType === "undo") {
      if (checkbox.checked) item.classList.add("invisible");
      else item.classList.remove("invisible");
    } else if (filterType === "completed") {
      if (!checkbox.checked) item.classList.add("invisible");
      else item.classList.remove("invisible");
    }
  });
}

function handleCheck(ID) {
  let checkbox = document.querySelector(`input[id=${ID}]`);
  let item = checkbox.parentElement;
  let filterType = filter.value;

  console.log(filterType, checkbox);

  if (filterType === "undo" && checkbox.checked) {
    item.classList.add("invisible");
  } else if (filterType === "completed" && !checkbox.checked) {
    item.classList.add("invisible");
  }
}

function handleAddInput() {
  let inputVal = inputBtn.value.trim();

  if (inputVal === "") return;

  addTodo(inputVal);
  inputBtn.value = "";
}

inputBtn.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleAddInput();
  }
});

plusBtn.addEventListener("click", (e) => handleAddInput());
filter.addEventListener("change", (e) => {
  filterTodo(e.target.value);
});
