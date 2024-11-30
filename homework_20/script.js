jQuery(documentLoadEventHandler);

function documentLoadEventHandler() {
  const listOfTasks = localStorage.getItem("listOfTasks");
  if (listOfTasks) {
    JSON.parse(listOfTasks).forEach((task) => {
      createTaskRecordOnInit(task);
    });
  }
}

function createTaskRecordOnInit(task) {
  //to do - reduce the number of params using destructuring assignment
  generateTaskListRecord(task.id, task.caption, task.isCompleted, false);
}

const formEl = $(".js--form:first");
formEl.on("submit", (event) => {
  event.preventDefault();
  handleAddTaskButtonClick();
});

function handleAddTaskButtonClick() {
  const taskCaption = $(".js--form__input").val();
  generateTaskListRecord(null, taskCaption);
}

function generateTaskListRecord(
  taskId,
  taskCaption,
  isCompleted = false,
  shouldSaveInStorage = true
) {
  const newListEl = generateListNewElement(taskId);
  const newChecboxEl = generateCheckboxElement();
  const newDescriptionEl = generateDescriptionElement(taskCaption);
  const newRemoveButtonEl = generateRemoveButtonElement();
  const listElConfig = {
    newListEl: newListEl,
    newChecboxEl: newChecboxEl,
    newDescriptionEl: newDescriptionEl,
    newRemoveButtonEl: newRemoveButtonEl,
  };
  const composedListEl = generateListElement(listElConfig);
  if (isCompleted) {
    composedListEl.classList.add("todo-item--checked");
    composedListEl.children[0].checked = true;
  }
  addTaskListRecord(composedListEl);
  const composedListElId = composedListEl.id;
  if (shouldSaveInStorage) {
    saveTaskToLocalStorageOnTaskCreation(composedListElId, taskCaption);
  }
}

function saveTaskToLocalStorageOnTaskCreation(id, caption) {
  const storageTasks = localStorage.getItem("listOfTasks");
  localStorage.setItem(
    "listOfTasks",
    storageTasks
      ? JSON.stringify([
          ...JSON.parse(storageTasks),
          { id: id, caption: caption, isCompleted: false },
        ])
      : JSON.stringify([{ id: id, caption: caption, isCompleted: false }])
  );
}

function addTaskListRecord(newListEl) {
  $("ul").append(newListEl);
  formEl.trigger("reset");
}

/*
  Elements generators
*/

function generateListNewElement(taskId) {
  const newListEl = document.createElement("li");
  taskId ? (newListEl.id = taskId) : (newListEl.id = generateId());
  newListEl.classList.add("todo-item");
  return newListEl;
}

function generateId() {
  return +new Date();
}

function generateCheckboxElement(isCompleted) {
  const checkBoxEl = document.createElement("input");
  checkBoxEl.type = "checkbox";
  checkBoxEl.addEventListener("change", changeTaskStatus);
  return checkBoxEl;
}

function generateDescriptionElement(taskCaption) {
  const descriptionEl = document.createElement("span");
  descriptionEl.textContent = taskCaption;
  descriptionEl.classList.add("todo-item__description");
  descriptionEl.addEventListener("click", () => {
    const taskModal = $("#task-modal");
    taskModal.find(".modal-body").text(taskCaption);
    taskModal.modal("show");
  });
  return descriptionEl;
}

function generateRemoveButtonElement() {
  const removeButtonEl = document.createElement("button");
  removeButtonEl.classList.add("todo-item__delete");
  removeButtonEl.textContent = "Видалити";
  removeButtonEl.addEventListener("click", removeTask);
  return removeButtonEl;
}

function generateListElement(config) {
  const generatedElement = config.newListEl;
  generatedElement.appendChild(config.newChecboxEl);
  generatedElement.appendChild(config.newDescriptionEl);
  generatedElement.appendChild(config.newRemoveButtonEl);
  return generatedElement;
}

/*
  Task status change handler
*/

function changeTaskStatus(event) {
  const eventTarget = event.currentTarget;
  const listEl = eventTarget.parentElement;
  listEl.classList.toggle("todo-item--checked");
  saveTaskStatusInLocalStorage(eventTarget, listEl);
}

function saveTaskStatusInLocalStorage(evtTarget, listEl) {
  const isCompleted = listEl.classList.contains("todo-item--checked");
  const taskId = evtTarget.parentElement.id;
  const localStorageTasks = localStorage.getItem("listOfTasks");
  const taskFromLocalStorageIdx = JSON.parse(localStorageTasks).findIndex(
    (task) => task.id == taskId
  );
  const parsedLocalStorage = JSON.parse(localStorageTasks);
  parsedLocalStorage[taskFromLocalStorageIdx].isCompleted = isCompleted;
  localStorage.setItem("listOfTasks", JSON.stringify(parsedLocalStorage));
}

/*
  Task remove handler
*/

function removeTask(event) {
  const eventTarget = event.currentTarget;
  const listRecordEl = eventTarget.parentElement;
  const listEl = listRecordEl.parentElement;
  removeTaskFromStorage(event);
  listEl.removeChild(listRecordEl);
}

function removeTaskFromStorage(event) {
  const taskId = event.target.parentElement.id;
  const localStorageTasks = JSON.parse(localStorage.getItem("listOfTasks"));
  const localStorageTasksWithoutRemoved = localStorageTasks.filter(
    (task) => task.id !== taskId
  );
  localStorage.setItem(
    "listOfTasks",
    JSON.stringify(localStorageTasksWithoutRemoved)
  );
}
