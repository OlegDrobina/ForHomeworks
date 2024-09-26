/*
    
    HW 3.1. Перелік типів

*/

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

// HW 3.1. end

/*

    HW 3.2. Числа та рядки

*/


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
    const isCancelClicked = value == null;
    if (isCancelClicked) {
        return "Cancel clicked";
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

// HW 3.2. end

/*

    HW 3.3. Розкласти п'ятизначне число

*/

let stayInTheLoop = true;
do {
    const inputValue = prompt("Please input a 5 digit number.\nIf you want to stop, simply click \"Cancel\".");
    const isCancelClicked = inputValue == null;
    if (!isCancelClicked) {
        const isFiveDigitsText = inputValue?.length == 5;
        if (isFiveDigitsText) {
            const isNaNInserted = Number.isNaN(Number(inputValue));
            if (isNaNInserted) {
                alert("Number should be inserted. Let's try again.");
            } else {
                let resultString = "";
                inputValue.split('').forEach((item) => {resultString += item + " "});
                alert(resultString);
                stayInTheLoop = false;
            }
        } else {
            alert("FIVE digits number is required.");
        }
    } else {
        alert("Cancel clciked. Goodbye!");
        stayInTheLoop = false;
    }
} while (stayInTheLoop);

