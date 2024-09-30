/*
    HW 4.1. Робота з prompt
*/

const userName = prompt("Please insert your name:");
alert(`Hello ${userName}! How are you?`);

//  HW 4.1. end

/*
    HW 4.2. Перевірка числа
*/

//type code here

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