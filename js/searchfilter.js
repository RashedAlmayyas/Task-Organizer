// ------------ filter selector
let form = document.getElementById("form");
let select = document.getElementById("select");
function filter() {
  let tasks = localStorage.getItem("tasks");
  let pTasks = JSON.parse(tasks);

  pTasks = pTasks.filter((item) => {
    return select.value == item.status;
  });
  let container = document.getElementById("card-container");
  container.innerHTML = "";
  pTasks.forEach((item) => {
    container.innerHTML += createTaskHtml(
      item.id,
      item.taskName,
      item.taskDescription,
      item.status
    );
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  filter();
});

// -----search

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value;
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
