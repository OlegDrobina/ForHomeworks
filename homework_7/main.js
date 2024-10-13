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

/*
  HW 7.3. Функція з циклом
*/

function questionUser() {
  for (let i = 0; i < 10; i++) {
    const userAnswer = prompt("Enter the number greater than 100");
    const isNanInserted = isNaN(userAnswer);
    if (userAnswer < 100) continue;
    if (userAnswer > 100 || i == 9 || isNanInserted) {
      console.log(userAnswer);
      break;
    }
  }
}
