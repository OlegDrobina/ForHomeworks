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

//Original function (Option 1)
function questionUserOpt1() {
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

//Option 2
function questionUserOpt2() {
  const receivedInputProcessor = processReceivedInput();
  let shouldStopProcesor = false;
  for (let i = 0; i < 10; i++) {
    const userAnswer = prompt("Enter the number greater than 100");
    if (isNaN(userAnswer) || userAnswer > 100 || i == 9) {
      shouldStopProcesor = true;
      return receivedInputProcessor(userAnswer, shouldStopProcesor);
    }
    receivedInputProcessor(userAnswer, shouldStopProcesor);
  }
}

function processReceivedInput() {
  let storedValue = 0;

  return function (receivedInput, shouldStopProcesor) {
    if (!isNaN(receivedInput) && receivedInput > storedValue) {
      storedValue = +receivedInput;
    }
    if (shouldStopProcesor) {
      return +storedValue;
    }
  };
}
