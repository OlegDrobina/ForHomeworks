/*
  HW 12.1. Переход на сторінку
*/

const inputLinkButtonEl = document.getElementById("inputLink");
inputLinkButtonEl.addEventListener("click", function (event) {
  event.stopPropagation();
  const insertedLink = prompt("Enter the link to open");
  const isUrlValid = verifyInsertedLink(insertedLink);
  if (isUrlValid) {
    //could use a separate variable here, but thought that in test
    //purpose could use window itself to store input URL
    window.insertedLink = insertedLink;
  } else {
    alert("Provided URL is invalid");
  }
});

function verifyInsertedLink(link) {
  try {
    new URL(link);
    return true;
  } catch (exception) {
    return false;
  }
}

const goToLinkButtonEl = document.getElementById("goToLink");
goToLinkButtonEl.addEventListener("click", function (event) {
  event.stopPropagation();
  if (window.location.href.length != 0) {
    //could use location instead of window.location here as well
    window.location.href = window.insertedLink;
  } else {
    alert("You should insert the link");
  }
});

/*
  HW 12.2. Використання подій
 */

document.querySelectorAll("button", (event) => {
  event.stopPropagation();
});
const buttonsContainer = document.getElementById("buttonsContainer");
buttonsContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    alert(`Button clicked: ${target.textContent}`);
  }
});

/*
  HW 12.3. TODO лист
*/

const listEl = document.querySelector("ul");
const addTaskButtonEl = document.getElementById("addTaskButton");
const inputTaskNameEl = document.getElementById("taskName");

addTaskButtonEl.addEventListener("click", (event) => {
  event.stopPropagation();
  const taskElContent = inputTaskNameEl?.value;
  if (taskElContent && taskElContent.length !== 0) {
    generateTaskListRecordAndButton(taskElContent);
  } else {
    alert("Task name should be filled in");
  }
  inputTaskNameEl.value = "";
});

function generateTaskListRecordAndButton(taskName) {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = taskName;

  const taskRemoveButtonEl = document.createElement("button");
  taskRemoveButtonEl.textContent = "Remove";

  listItemEl.appendChild(taskRemoveButtonEl);
  listEl.appendChild(listItemEl);
}

listEl.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const listItemElToRemove = target.parentElement;
    listEl.removeChild(listItemElToRemove);
  }
});
