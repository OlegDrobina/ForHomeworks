/*
  HW 13.1. Валідація з RegEx
*/
const form = document.querySelector("form");

const nameInputEl = document.getElementById("exampleFormControlInput1");
const messageInputEl = document.getElementById("exampleFormControlTextarea1");
const phoneInputEl = document.getElementById("exampleFormControlInput2");
const emailInputEl = document.getElementById("exampleFormControlInput3");

const validatorsList = [
  {
    name: "exampleFormControlInput1",
    validator: /[A-Za-z]{1,}/,
    errorElement: "name-error",
    errorMessage: "Name should be filled in",
    isValid: false,
  },
  {
    name: "exampleFormControlTextarea1",
    validator: /.{5,}/s,
    errorElement: "message-error",
    errorMessage: "Field should contain at least 5 characters",
    isValid: false,
  },
  {
    name: "exampleFormControlInput2",
    validator: /\+380\d{9,}/,
    errorElement: "phone-error",
    errorMessage: "Field is required and should start with +380",
    isValid: false,
  },
  {
    name: "exampleFormControlInput3",
    validator: /\w{1,}@\w{1,}\.\w{1,}/s,
    errorElement: "email-error",
    errorMessage: "Field is required and valid email address is expected",
    isValid: false,
  },
];

const validateValue = function (element) {
  const elementId = element.target.id;
  const elementContent = element.target.value;

  const elementValidator = validatorsList.find(
    (item) => item.name == elementId
  );
  const elvalidatorValue = elementValidator.validator;
  const elValidatorErrorEl = elementValidator.errorElement;
  const elValidatorErrorMessage = elementValidator.errorMessage;

  validateColumn(elementContent, elvalidatorValue)
    ? setValidState(elementId, elValidatorErrorEl)
    : setInvalidState(elementId, elValidatorErrorEl, elValidatorErrorMessage);
};

function validateColumn(columnValue, validator) {
  return validator.test(columnValue);
}

function validateBeforeSubmit(
  elementId,
  validator,
  errorElement,
  errorMessage
) {
  validator.test(elementId)
    ? setValidState(elementId, errorElement)
    : setInvalidState(elementId, errorElement, errorMessage);
}

function setInvalidState(element, errorElement, errorMessage) {
  document.querySelector(`.${errorElement}`).classList.add("show-error");
  document.querySelector(`.${errorElement}`).textContent = errorMessage;
  updateValidationStatus(element, false);
}

function setValidState(element, errorElement) {
  document.querySelector(`.${errorElement}`).classList.remove("show-error");
  updateValidationStatus(element, true);
}

function updateValidationStatus(elementId, state) {
  validatorsList.find((item, index) => {
    if (item.name == elementId) {
      validatorsList[index].isValid = state;
      return;
    }
  });
}

nameInputEl.addEventListener("input", validateValue);
messageInputEl.addEventListener("input", validateValue);
phoneInputEl.addEventListener("input", validateValue);
emailInputEl.addEventListener("input", validateValue);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formObj = {};
  formData.forEach((value, key) => (formObj[key] = value));
  const validationResult = validatorsList.some((item) => item.isValid == false);
  if (validationResult) {
    validatorsList.forEach((item) => {
      if (item.isValid == false) {
        setInvalidState(item.element, item.errorElement, item.errorMessage);
      }
    });
  } else {
    console.log(formObj);
  }
});
