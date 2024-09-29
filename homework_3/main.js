let continueTaskSelection = true;
do {
    alert("NOTE: If you want to stop tasks selection, simply hit cancel");
    const firstTaskDescription = "HW 3.1. Show data types";
    const secondTaskDescription = "HW 3.2. Numbers and strings";
    const thirdTaskDescription = "HW 3.3. Decompose the 5-digits number";
    const selectedTask = prompt(`The list of tasks is:\n1) ${firstTaskDescription}\n2) ${secondTaskDescription}\n3) ${thirdTaskDescription} \nPlease input the number of the task to start reviewing it:`);

    switch(selectedTask) {
        case "1":
            processTheFirstTask();
            break;
        case "2":
            processTheSecondTask();
            break;
        case "3":
            processTheThirdTask();
            break;
        case null: 
            alert("Cancel clicked. Stopping the program.");
            continueTaskSelection = false;
            break;
        default: alert("The number of the task should be inserted");
    }
} while (continueTaskSelection);
 

/*
    
    HW 3.1. Перелік типів

*/
function processTheFirstTask() {
// 1. Variables declaration and initialization

// 1.1. Primitive data types

    const stringValue = "Test string";
    const numberValue = 1;
    const booleanValue = stringValue == numberValue;
    const bigIntValue = 1n;
    const symbolValue = Symbol(stringValue);
    const nullValue = null;
    let undefinedValue;

// 1.2. Object data types

    const objectValue = {};
    const arrayValue = [];
    const funcValue = function(){};

// 2. Return typeof each variable into the console

// 2.1. Primitive typeofs log

    console.log("stringValue data type is: " + typeof stringValue);
    console.log("numberValue data type is: " + typeof numberValue);
    console.log("booleanValue data type is: " + typeof booleanValue);
    console.log("bigIntValue data type is: " + typeof bigIntValue);
    console.log("symbolValue data type is: " + typeof symbolValue);
    console.log("nullValue data type is: " + typeof nullValue);
    console.log("undefinedValue data type is: " + typeof undefinedValue);

// 2.2. Object typeofs log

    console.log("objectValue data type is: " + typeof objectValue);
    console.log("arrayValue data type is: " + typeof arrayValue);
    console.log("funcValue data type is: " + typeof funcValue);

    alert("Check the console to see the result");
}

// HW 3.1. end

/*

    HW 3.2. Числа та рядки

*/

function processTheSecondTask() {
    // 1. Ask user to input three values

    // Message is divided into two parts to make the code more readable
    const questionMesageFirstPart = "You will be asked to input three values.";
    const questionMesageSecondPart = "If the cancel button is clicked or an empty string inserted, we will notify you.";
    alert(questionMesageFirstPart + "\n\n" + questionMesageSecondPart);

    const firstInputValue = prompt("Please input the first value");
    const secondInputValue = prompt("Please input the second value");
    const thirdInputValue = prompt("Please input the third value");
    alert("Thank you! Processing data.");

    // 2. Function to process received values

    function processReceivedValue(value) {
        const isCancelClicked = value == null; //null is returned if cancel is clicked or the page refreshed
        if (isCancelClicked) {
            return "Cancel clicked or the page was refreshed";
        }
        const isNothingTyped = value?.length == 0 && value?.trim()?.length == 0;
        if (isNothingTyped) {
            return "Nothing was inserted"
        }
        const isEmptyStringTyped = value?.length != 0 && value?.trim()?.length == 0;
        if (isEmptyStringTyped) {
            return "Empty string inserted";
        } 
        return value;
    }

    // 3. Process received values

    const firstValueProcessed = processReceivedValue(firstInputValue);
    const secondValueProcessed = processReceivedValue(secondInputValue);
    const thirdValueProcessed = processReceivedValue(thirdInputValue);

    // 4. Return the result

    alert(`${firstValueProcessed}\n${secondValueProcessed} \n${thirdValueProcessed}`);
}

// HW 3.2. end

/*

    HW 3.3. Розкласти п'ятизначне число

*/
function processTheThirdTask() {
    let stayInTheLoop = true;
    do {
        const inputValue = prompt("Please input a 5 digit number.\nIf you want to stop, simply click \"Cancel\".");
        const isCancelClicked = inputValue == null;
        const isEmptyStringInserted = inputValue?.trim()?.length == 0;
        if (!isCancelClicked) {
            const isFiveDigitsText = inputValue?.length == 5;
            if (isFiveDigitsText && !isEmptyStringInserted) {
                const isNaNInserted = Number.isNaN(Number(inputValue));
                if (isNaNInserted) {
                    alert("Number should be inserted. Let's try again.");
                } else {
                    let resultString = "";
                    inputValue.split('').forEach((item) => {resultString += item + " "});
                    alert(resultString);
                    stayInTheLoop = false;
                }
            } else if (isEmptyStringInserted) {
                alert("Empty string was inserted, let's try again.");
            } else {
                alert("FIVE digits number is required.");
            } 
        } else {
            alert("Cancel clciked or the page was refreshed. Home task check is stopped.");
            stayInTheLoop = false;
        }
    } while (stayInTheLoop);
}

// HW 3.3. end