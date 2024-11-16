/*
    HW 17.1. Клас "Калькулятор"
*/

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4

/*
    HW 17.2. Клас "Тренер"
*/

class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }
  displayInfo() {
    console.log(
      `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
    );
  }
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);
coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

/*
    HW 17.3. Клас "Банківський рахунок"
 */
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  deposit(depValue) {
    this.balance += depValue;
  }
  withdraw(widValue) {
    this.balance -= widValue;
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300
