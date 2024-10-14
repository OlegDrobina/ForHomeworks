/*
  HW 7.1. Замикання
*/

function incrementValue() {
  let storedValue = 0;
  return function (passedValue) {
    storedValue += passedValue;
    return storedValue;
  };
}

//  NOTE: create an instance of the incrementValue function as
//  const incrementFunction = incrementValue();
//  and then call console.log(incrementFunction(pass_the_value_here))

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
