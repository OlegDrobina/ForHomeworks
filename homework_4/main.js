/*
    HW 4.1. Робота з prompt
*/

const userName = prompt("Please insert your name:");
alert(`Hello ${userName}! How are you?`);

//  HW 4.1. end

/*
    HW 4.2. Перевірка числа
*/

const num = prompt("Enter the first 3 digit number");

// Check if the value was inserted, if it's a 3 digit value and if it's a number
const isNanValue = Number.isNaN(+num);
const isThreeDigitValue = num?.length == 3 && num?.trim()?.length == 3;
const isOperationCanceled= num == null;

// Declare message text. It will be filled in based on the results of the check.
let messageText;

if (isOperationCanceled) {
    messageText = "The operation was canceled";
} else if (isNanValue) {
    messageText = "The inserted value is not a number";
} else if (!isThreeDigitValue) {
    messageText = "The inserted value is not a 3 digit number";
} else {
    const allNumsEqual = num[0] == num[1] == num[2];
    const containsEqualNums = num[0] == num[1] || num[1] == num[2] || num[2] == num[0];
    if (containsEqualNums && !allNumsEqual) {
        messageText = "The value has equal numbers";
    } else if (allNumsEqual) {
        messageText = "All numbers of the value are equal";
    } else {
        messageText = "Thank you!";
    }
}
alert(messageText);

//  HW 4.2. end

/*
    HW 4.3. Портрет користувача
*/

//type code here

//  HW 4.3. end


/*
    HW 4.4. Робота з switch…case
*/

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(numOrStr) {
    case (numOrStr === null):
        console.log('Input canceled');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

//  HW 4.4. end