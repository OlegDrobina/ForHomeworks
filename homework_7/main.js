/*
  HW 7.1. Замикання
*/

function increaseValue() {
  let storedValue = 0;
  return function performIncrement(passedValue) {
    storedValue += passedValue;
    return storedValue;
  };
}

/*
  HW 7.2. Добуток через карування
*/

function multiplyNumbers(firstNum) {
  return (secondNum) => {
    return firstNum * secondNum;
  };
}
