// #1. Get functions for form, expense list and total amount elements 
const expenseForm = 
    document.getElementById("expense-form"); 
const expenseList = 
    document.getElementById("expense-list"); 
const totalAmountElement = 
    document.getElementById("total-amount"); 
  
// #2. Initializes expenses array from localStorage 
let expenses =  
    JSON.parse(localStorage.getItem("expenses")) || []; 
  
// #3. Renders expenses in tabular form 
function renderExpenses() {
	// code...
}

// #4. Add expense function
function addExpense(event) {
	// code...
}

// #5. Delete expense function
function deleteExpense(event) {
	// code...
}

// #6. Event listeners
expenseForm.addEventListener("", )

// #7. Reset render: initial expenses on page load
renderExpenses();
