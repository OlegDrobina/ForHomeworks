window.addEventListener("load", () => {});

function createTaskRecordOnInit(task) {
  //to do - reduce the number of params using destructuring assignment
  generateTaskListRecord(task.id, task.caption, task.isCompleted, false);
}

function handleAddTaskButtonClick() {
  const taskCaptionEl = document.querySelector(".js--form__input");
  const taskCaption = taskCaptionEl.value;
  generateTaskListRecord(null, taskCaption);
}

function generateTaskListRecord(taskId, taskCaption, isCompleted = false) {
  const newListEl = generateListNewElement(taskId);
  const newChecboxEl = generateCheckboxElement(taskId);
  const newDescriptionEl = generateDescriptionElement(taskId, taskCaption);
  const listElConfig = {
    newListEl: newListEl,
    newChecboxEl: newChecboxEl,
    newDescriptionEl: newDescriptionEl,
  };
  const composedListEl = generateListElement(listElConfig);
  if (isCompleted) {
    composedListEl.classList.add("todo-item--checked");
    composedListEl.children[0].checked = true;
  }
  addTaskListRecord(composedListEl);
  const composedListElId = composedListEl.id;
}

function addTaskListRecord(newListEl) {
  const taskListEl = document.querySelector("ul");
  taskListEl.appendChild(newListEl);
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

function generateCheckboxElement(taskId) {
  const checkBoxEl = document.createElement("input");
  checkBoxEl.id = `js--${taskId}--checkbox`;
  checkBoxEl.type = "checkbox";
  checkBoxEl.addEventListener("change", changeTaskStatus);
  return checkBoxEl;
}

function generateDescriptionElement(taskId, taskCaption) {
  const descriptionEl = $("<span></span>");
  descriptionEl.prop("textContent", taskCaption);
  descriptionEl.attr("class", "todo-item__description");
  descriptionEl.on("click", () => {
    const taskModal = $("#task-modal");
    taskModal.find(".modal-body").text(taskCaption);
    taskModal.find(".modal-header-title").text(`Task Id: ${taskId}`);
    taskModal.modal("show");
  });
  return descriptionEl;
}

function generateListElement(config) {
  const generatedElement = config.newListEl;
  generatedElement.appendChild(config.newChecboxEl);
  generatedElement.appendChild(config.newDescriptionEl[0]);
  return generatedElement;
}

/*
    Task status change handler
  */

function changeTaskStatus(event) {
  const eventTarget = event.currentTarget;
  const listEl = eventTarget.parentElement;
  listEl.classList.toggle("todo-item--checked");
}

/*
    Task remove handler
  */

function removeTask(event) {
  const eventTarget = event.currentTarget;
  const listRecordEl = eventTarget.parentElement;
  const listEl = listRecordEl.parentElement;
  listEl.removeChild(listRecordEl);
}

function getCurrentlyDisplayedTaskIds() {
  const tasksListElmnts = document.querySelectorAll("li");
  let currentTasksIds = [];
  if (tasksListElmnts.length != 0) {
    tasksListElmnts.forEach((item) => {
      currentTasksIds.push(item.id);
    });
  }
  return currentTasksIds;
}

function clearSearchColumnValuesAfterRequest() {
  document.querySelector("#form-id").reset();
}

/*
  Buttons click handlers
*/

const getButton = document.querySelector("#get");
document.querySelector("#get").addEventListener("click", async () => {
  const response = await getResponse();
  const data = await response.json();
  const currentTasksIds = getCurrentlyDisplayedTaskIds();
  data.forEach((item) => {
    const { _id, text, checked } = item;
    if (!currentTasksIds.includes(_id)) {
      generateTaskListRecord(_id, text, checked);
    }
  });
});

const postButton = document.querySelector("#post");
document.querySelector("#post").addEventListener("click", async () => {
  const response = await postResponse();
  const procResponse = await response.json();
  const { _id, text, checked } = procResponse;
  generateTaskListRecord(_id, text, checked);
  clearSearchColumnValuesAfterRequest();
});

const putButton = document.querySelector("#put");
document.querySelector("#put").addEventListener("click", async () => {
  const repsonse = await putResponse(
    document.querySelector("#todo-id").value,
    document.querySelector("#todo-text").value,
    document.querySelector(
      `#js--${document.querySelector("#todo-id").value}--checkbox`
    ).checked
  );
  clearSearchColumnValuesAfterRequest();
});

const deleteButton = document.querySelector("#delete");
document.querySelector("#delete").addEventListener("click", async () => {
  const deleteRecordId = document.querySelector("#todo-id").value;
  const response = await deleteResponse(deleteRecordId);
  const readResponse = await response.json();
  if (readResponse?.deletedCount === 1) {
    const listEl = document.getElementById(`${deleteRecordId}`);
    const parentListel = listEl.parentElement;
    parentListel.removeChild(listEl);
    clearSearchColumnValuesAfterRequest();
  }
});

/*
  Node.js communication
*/
const getResponse = async () => fetch("http://localhost:8080/todos");

const postResponse = async () => {
  let taskSubject = document.querySelector("#todo-text").value;
  if (taskSubject.length == 0) {
    taskSubject = "Sample task";
  }
  return await fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: taskSubject,
      checked: false,
    }),
  });
};
const putResponse = async (id, text, checked) => {
  if (text.length === 0) {
    text = document
      .getElementById(id)
      ?.querySelector(".todo-item__description")?.textContent;
  }
  fetch(`http://localhost:8080/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      checked: checked,
    }),
  });
};

const deleteResponse = async (id) => {
  return await fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
