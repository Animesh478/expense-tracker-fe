const form = document.getElementById("form");
const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const data = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

const transactions = data;

function addTransactionToDOM(transaction) {
  //get the sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const li = document.createElement("li");
  // add class to the list item
  li.classList.add(transaction.amount < 0 ? "minus" : "plus");

  li.innerHTML = `
  ${transaction.text} <span>${sign}Rs ${Math.abs(
    transaction.amount
  )}</span><button class="delete-btn">X</button>
  `;

  list.appendChild(li);
}

// Init the app
function init() {
  list.innerHTML = ""; // clear the list in the DOM
  transactions.forEach(addTransactionToDOM);
}

init();
