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

// Check if the value was inserted, if it's a 3 digits value and if it's a number
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
    const allNumsEqual = num[0] == num[1] && num[1] == num[2] && num[2] == num[0];
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

const yearOfBirth = prompt("Please input the year of your birth");
const currentCity = prompt("Please input the city name where you live");
const favoriteSport = prompt("Please input your favorite sport name");

// 4.3.4 Check if something was not inserted

const yearOfBirthInserted = yearOfBirth !== null;
const currentCityInserted = currentCity !== null;
const favoriteSportInserted = favoriteSport !== null;

// 4.3.1 Return user age

/*
    Assume that we need this program to dynamically calculate the age and work properly in the years to come
    Also take 4.3.4 check if the year of birth was inserted by the end-user into consideration
*/

if (yearOfBirthInserted) {
    const userAge = new Date().getFullYear() - yearOfBirth;
    alert(`Your age is: ${userAge}`);
} else {
    alert("I'm sorry that you didn't want to specify your year of birth");
}


//4.3.2. City/capital message
//Also take 4.3.4 check if the current city was inserted by the end-user into consideration

if (currentCityInserted) {
    let capitalCountry;
    switch (currentCity) {
        case "Kyiv":
            capitalCountry = "Ukraine";
            break;
        case "Washington":
            capitalCountry = "USA";
            break;
        case "London":
            capitalCountry = "Great Britain";
            break;
        default:
            alert(`You live in ${currentCity}`);
    }
    capitalCountry?.length > 0 ? alert(`You live in the capital of ${capitalCountry}`) : false;
} else {
    alert("I'm sorry that you didn't want to specify the city you live in");
}




//4.3.3 Sport additional task
//Also take 4.3.4 check if the favorite sport was inserted by the end-user into consideration

if (favoriteSportInserted) {
    switch (favoriteSport) {
        case "Football":
            alert("Cool! You wanna be Ronaldo?");
            break;
        case "Basketball":
            alert("Cool! You wannt be Jordan?");
            break;
        case "Box":
            alert("Cool! You wannt be Klitschko?");
            break;
        default:
            alert(`Whish you become the best in ${favoriteSport}!`);
    }
} else {
    alert("I'm sorry that you didn't want to specify your favorite sport");
}

//  HW 4.3. end


/*
    HW 4.4. Робота з switch…case
*/

let numOrStr = prompt('input number or string');

switch(numOrStr) {
    case null:
        console.log('Input canceled');
        break;
    default:
        switch(numOrStr.trim() === '') {
            case true:
                console.log('Empty String');
                break;
            default:
                switch (isNaN(+numOrStr)) {
                    case true:
                        console.log(' number is Ba_NaN');
                        break;
                    default:
                        console.log('OK!');
                }
        }
}

//  HW 4.4. end