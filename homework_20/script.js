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
  const newListEl = generateListNewElement(taskId)[0];
  const newChecboxEl = generateCheckboxElement()[0];
  const newDescriptionEl = generateDescriptionElement(taskCaption);
  const newRemoveButtonEl = generateRemoveButtonElement();
  const listElConfig = {
    newListEl: newListEl,
    newChecboxEl: newChecboxEl,
    newDescriptionEl: newDescriptionEl[0],
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
  const newListEl = $("<li></li>");
  taskId ? newListEl.prop("id", taskId) : newListEl.prop("id", generateId);
  newListEl.attr("class", "todo-item");
  return newListEl;
}

function generateId() {
  return +new Date();
}

function generateCheckboxElement() {
  const checkBoxEl = $("<input></input>");
  checkBoxEl.prop("type", "checkbox");
  checkBoxEl.on("change", changeTaskStatus);
  return checkBoxEl;
}

function generateDescriptionElement(taskCaption) {
  const descriptionEl = $("<span></span>");
  descriptionEl.prop("textContent", taskCaption);
  descriptionEl.attr("class", "todo-item__description");
  descriptionEl.on("click", () => {
    const taskModal = $("#task-modal");
    taskModal.find(".modal-body").text(taskCaption);
    taskModal.modal("show");
  });
  return descriptionEl;
}

function generateRemoveButtonElement() {
  const removeButtonEl = $("<button></button>");
  removeButtonEl.attr("class", "todo-item__delete");
  removeButtonEl.prop("textContent", "Видалити");
  removeButtonEl.on("click", removeTask);
  return removeButtonEl;
}

function generateListElement(config) {
  const generatedElement = config.newListEl;
  generatedElement.appendChild(config.newChecboxEl);
  generatedElement.appendChild(config.newDescriptionEl);
  generatedElement.appendChild(config.newRemoveButtonEl[0]);
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
