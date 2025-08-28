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

function addTransaction(e) {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Enter text and amount");
  } else {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: Number(amount.value),
    };

    transactions.push(transaction);
    addTransactionToDOM(transaction);
    updateValues();
  }
}

function generateId() {
  return Math.floor(Math.random() * 1000000000) + 1;
}

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

// update balance, income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const balanceAmount = amounts.reduce((acc, val) => (acc += val), 0);
  const income = amounts
    .filter((val) => val > 0)
    .reduce((acc, val) => (acc += val), 0);
  const expense =
    amounts.filter((val) => val < 0).reduce((acc, val) => (acc += val), 0) * -1;

  balance.textContent = `Rs ${balanceAmount.toFixed(2)}`;
  moneyPlus.textContent = `+ Rs ${income.toFixed(2)}`;
  moneyMinus.textContent = `- Rs ${expense.toFixed(2)}`;
}

// delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  init();
}

// Init the app
function init() {
  list.innerHTML = ""; // clear the list in the DOM
  transactions.forEach(addTransactionToDOM);
  updateValues();
}

init();

form.addEventListener("submit", addTransaction);
