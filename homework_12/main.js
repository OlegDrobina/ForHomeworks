/*
  HW 12.1. Переход на сторінку
*/

const inputLinkButtonEl = document.getElementById("inputLink");
inputLinkButtonEl.addEventListener("click", function (event) {
  event.stopPropagation();
  const insertedLink = prompt("Enter the link to open");
  const isUrlValid = verifyInsertedLink(insertedLink);
  if (isUrlValid) {
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
  if ((target.tagName = "button")) {
    event.stopPropagation();
    alert(`Button clicked: ${target.textContent}`);
  }
});
