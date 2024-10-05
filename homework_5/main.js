/*
    HW 5.1. Вивід чисел до консолі
*/

let result = "";
for (let i = 20; i <= 30; i += 0.5) {
  result += `${i} `;
}
console.log(result);

// HW 5.1 end

/*
    HW 5.2. Розрахунок валюти
*/

const currencyRate = 26;
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i * currencyRate} hrivnyas for ${i} dollars.`);
}

// HW 5.2 end

/*
    HW 5.3. Пошук потрібних чисел
*/

const numberInput = +prompt("Enter the number");
let i = 1;
while (i * i <= numberInput) {
  console.log(`${i++}`);
}

// HW 5.3 end

/* 
    HW 5.4. Просте число чи ні
*/

const inputNumber = +prompt("Enter the number");
let messageText = "Number is prime";
for (let x = 2; x <= 7; x++) {
  if (x == 4 || x == 6) continue; //to make the cycle processing faster
  if (inputNumber % x == 0 && x != inputNumber) {
    messageText = "Number is not prime";
    break; //to make the cycle processing faster
  }
}
console.log(messageText);

// HW 5.4 end
