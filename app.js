// Retrieve expenses from local storage (if any)
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Get form and expense list references
const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Function to render expenses
function renderExpenses() {
  // Clear existing list
  expenseList.innerHTML = "";

  // Render each expense item
  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
      <span>${expense.name}</span>
      <span>${expense.amount}</span>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(expenseItem);
  });

  // Save expenses to local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function to handle form submission
function addExpense(event) {
  event.preventDefault();

  // Get expense details from form
  const expenseNameInput = document.getElementById("expenseName");
  const expenseAmountInput = document.getElementById("expenseAmount");
  const name = expenseNameInput.value;
  const amount = parseFloat(expenseAmountInput.value);

  // Validate inputs
  if (!name || !amount || isNaN(amount)) {
    alert("Please enter a valid name and amount.");
    return;
  }

  // Create new expense object
  const expense = {
    name,
    amount
  };

  // Add expense to expenses array
  expenses.push(expense);

  // Clear form inputs
  expenseNameInput.value = "";
  expenseAmountInput.value = "";

  // Render updated expenses
  renderExpenses();
}

// Function to delete an expense
function deleteExpense(index) {
  // Remove expense from expenses array
  expenses.splice(index, 1);

  // Render updated expenses
  renderExpenses();
}

// Attach event listener to form submission
expenseForm.addEventListener("submit", addExpense);

// Render initial expenses
renderExpenses();
