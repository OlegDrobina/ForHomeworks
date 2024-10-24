/*
  HW 11.1. Таблиця піфагора
*/

const headerEl = document.createElement("h2");
headerEl.textContent = "Pifagor table";

const pifagorTableEl = document.createElement("table");
for (let i = 1; i <= 10; i++) {
  const pifagorTableRowEl = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const pifaforTableCellEl = document.createElement("td");
    pifaforTableCellEl.textContent = i * j;
    pifagorTableRowEl.append(pifaforTableCellEl);
  }
  pifagorTableEl.append(pifagorTableRowEl);
}

document.body.append(headerEl, pifagorTableEl);

/*
  HW 11.2. Кнопка зміни кольору
*/

const textEl = document.createElement("p");
textEl.textContent = "This should change its color";

const buttonEl = document.createElement("button");
buttonEl.textContent = "Click me!";
buttonEl.addEventListener("click", function (event) {
  textEl.classList.toggle("textToChangeColor");
});

document.body.append(textEl, buttonEl);
