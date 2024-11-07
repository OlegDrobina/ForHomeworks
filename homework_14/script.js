let slideIndex = 0;
const slidesEl = document.getElementsByClassName("slideElement");
const dotsContainer = document.getElementById("dotsContainer");
const dotsElements = document.getElementsByClassName("dot");
const navigationButtons = document.getElementsByClassName("navigationButton");

window.addEventListener("load", () => {
  showSlide(slideIndex);
  modifyDotActiveStateOnLoad();
  addNavigationButtonsEventListener();
  modifyButtonVisibilityOnLoad();
});

dotsContainer.addEventListener("click", (event) => {
  const eventTargetId = event.target.id;
  const evTargetClassName = event.target.className;
  if (evTargetClassName == "dot") {
    modifyDotActiveState(event);
    const arrowToHide = checkElementSiblings(event);
    modifyPrevNextButtonsVisibility(arrowToHide);
    slideIndex = +eventTargetId.match(/\d/)[0];
    showSlide(slideIndex);
  }
});

function checkElementSiblings(event) {
  let elementToHide = "";
  const eventTarget = event.target;
  const hasNoPreviousSibling = eventTarget.previousElementSibling == null;
  const hasNoNextSibling = eventTarget.nextElementSibling == null;
  if (hasNoPreviousSibling) {
    elementToHide = "prev";
  } else if (hasNoNextSibling) {
    elementToHide = "next";
  }
  return elementToHide;
}

function modifyPrevNextButtonsVisibility(elementToProcess = "") {
  for (navigationButton of navigationButtons) {
    navigationButton.classList.remove("button-hide");
  }
  if (elementToProcess.length !== 0) {
    const buttonToModify = document.querySelector(`.${elementToProcess}`);
    buttonToModify.classList.add("button-hide");
  } else {
    resetVisibilityStateForNavigationButtons();
  }
}

function modifyDotActiveState(event) {
  for (dotEl of dotsElements) {
    dotEl.classList.remove("active");
  }
  event.target.classList.add("active");
}

function showSlide(slideIdx) {
  for (slide of slidesEl) {
    slide.style.display = "none";
  }
  slidesEl[slideIdx].style.display = "block";
}

function modifyDotActiveStateOnLoad() {
  dotsElements[0].classList.add("active");
}

function modifyButtonVisibilityOnLoad() {
  modifyPrevNextButtonsVisibility("prev");
}

function modifyDotActiveStateByIndex(index) {
  for (dotEl of dotsElements) {
    dotEl.classList.remove("active");
  }
  dotsElements[index].classList.add("active");
}

function addNavigationButtonsEventListener() {
  for (navigationButton of navigationButtons) {
    navigationButton.addEventListener("click", (event) => {
      handleNavigationButtonClick(event);
    });
  }
}

function handleNavigationButtonClick(event) {
  const nameOfButtonClick = identifyClickedButton(event);
  switch (nameOfButtonClick) {
    case "next":
      handleNextButtonClick();
      break;
    case "prev":
      handlePreviousButtonClick();
      break;
    default:
      break;
  }
}

function identifyClickedButton(event) {
  return event.target.classList.contains("next") ? "next" : "prev";
}

function handleNextButtonClick() {
  slideIndex += 1;
  slideIndex == slidesEl.length - 1
    ? modifyPrevNextButtonsVisibility("next")
    : modifyPrevNextButtonsVisibility();
  modifyDotActiveStateByIndex(slideIndex);
  showSlide(slideIndex);
}

function handlePreviousButtonClick() {
  slideIndex -= 1;
  slideIndex == 0
    ? modifyPrevNextButtonsVisibility("prev")
    : modifyPrevNextButtonsVisibility();
  modifyDotActiveStateByIndex(slideIndex);
  showSlide(slideIndex);
}

function resetVisibilityStateForNavigationButtons() {
  for (button of navigationButtons) {
    button.classList.remove("button-hide");
  }
}
