/*
    HW 5.1. Вивід чисел до консолі
*/

let result = '';
for (let i = 20; i <= 30; i+= 0.5) {
    result += `${i} `;
}
console.log(result);

// HW 5.1 end

/*
    HW 5.2. Розрахунок валюти
*/

const currencyRate = 26;
for (let i = 10; i <= 100; i+=10) {
    console.log(`For ${i} dollars: ${i * currencyRate} hrivnyas`);
}

// HW 5.2 end

/*
    HW 5.3. Пошук потрібних чисел
*/

const numberInput = +prompt("Enter the number");
let i = 1;

// HW 5.3 end