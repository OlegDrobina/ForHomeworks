/*
  HW 6.1. Написати функцію видалення масиву символів
*/

function modifyString(inputString, elements) {
  if (typeof inputString !== "string") {
    return "String is required as a first argument";
  }
  if (!Array.isArray(elements)) {
    return "Array of elements is required as a second argument";
  }
  for (item of elements) {
    inputString = inputString.replaceAll(item, "");
  }
  return inputString;
}

/*
  HW 6.2. Визначення середнього арифметичного.
*/

function arithmeticMean(inputValues) {
  if (!Array.isArray(inputValues)) {
    return "Array of values is required";
  }
  if (inputValues.length === 0 && Array.isArray(inputValues)) {
    return "A non-empty array is required";
  }
  let indexCounter = 0; //to count the actual numbers in the array
  let sum = 0;
  inputValues.forEach((item) => {
    if (typeof item === "number" && !isNaN(item)) {
      //isNaN added cause there can be NaN in the array that is a number data type
      indexCounter++;
      sum += item;
    }
  });
  if (sum != 0 || indexCounter != 0) {
    return sum / indexCounter;
  }
  return "I cannot count arithmetic mean, no number is provided in the array";
}

/*
  HW 6.3. Функція видалення елементу
*/

function removeElement(inputArray, inputItem) {
  if (!Array.isArray(inputArray)) {
    return "Array is required as a first argument";
  }
  if (!inputItem) {
    return "Some item is required as a second agument";
  }
  inputArray.forEach((item, index) => {
    if (item === inputItem) {
      //strict check is needed here since "3" == 3 returns true
      inputArray.splice(index, 1);
    }
  });
  return inputArray;
}
