const exp = {
    id: 1,
    title: 'Grocery',
    amount: 294.67,
    date: new Date(2020, 2, 28)
};
const exp2 = {
    id: 2,
    title: "Electricity Bill",
    amount: 299.67,
    date: new Date(2021, 3, 18)
};
const exp3 = {
    id: 3,
    title: "Coffee",
    amount: 799.49,
    date: new Date(2021, 5, 12)
};

let expenses = [exp, exp2, exp3];

const newExp = {
    id: 3,
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 5, 22)
};

// check if ID exists
let idExixts = false;
for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === newExp.id) {
        idExixts = true;
    }
}

if (!idExixts) {
    console.log("ID does not exist. New Expense added successfully.");
    expenses.push(newExp);
} else {
    console.log("ID already exists. New Expense cannot be added.");
}

console.log("All Expenses:");
console.log(expenses);

// find highest and lowest
let highestExpense = expenses[0];
let lowestExpense = expenses[0];

for (let i = 1; i < expenses.length; i++) {
    if (expenses[i].amount > highestExpense.amount) {
        highestExpense = expenses[i];
    }
    if (expenses[i].amount < lowestExpense.amount) {
        lowestExpense = expenses[i];
    }
}

console.log("Highest Expense:");
console.log("Title: " + highestExpense.title);
console.log("Amount: " + highestExpense.amount);
console.log("Date: " + highestExpense.date);

console.log("Lowest Expense:");
console.log("Title: " + lowestExpense.title);
console.log("Amount: " + lowestExpense.amount);
console.log("Date: " + lowestExpense.date);

// total and average
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;
}
let average = total / expenses.length;

console.log("Total of all expenses: " + total.toFixed(2));
console.log("Average expense amount: " + average.toFixed(2));

//************************************************************** */
//task2
const product = { id: 1, title: "Laptop", price: 799.49, quantity: 1 };
const product2 = { id: 2, title: "Smartphone", price: 699.49, quantity: 1 };
const product3 = { id: 3, title: "Tablet", price: 499.49, quantity: 1 };
const product4 = { id: 4, title: "Headphones", price: 199.49, quantity: 1 };

let products = [product, product2, product3, product4];

function addItems(newProduct) {
    let titleExists = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].title === newProduct.title) {
            products[i].quantity = products[i].quantity + newProduct.quantity;
            titleExists = true;
            console.log("Updated quantity of " + newProduct.title + " to " + products[i].quantity);
        }
    }
    if (!titleExists) {
        products.push(newProduct);
        console.log("New product added successfully"+ " " + "with" + " "+ newProduct.quantity + " " + newProduct.title); 
    }
}

function removeItems(id) {
    products = products.filter(item => item.id !== id);//mtlb  jo id match na krti ho wo rakh lo aur jo match kry usko remove krdo
    console.log("Product with ID " + id + " removed successfully");
}

function calculations() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = total + (products[i].price * products[i].quantity);
    }
    console.log("Total price of all products in the cart: " + total.toFixed(2));

    if (total > 100) {
        console.log("You are eligible for a discount of 10 percent");
        let discount = total * 0.10;//discount nikal rhy uski amount
        let discountedTotal = total - discount;//ab total mn sy discount ko remove kr diya
        console.log("Total price after discount: " + discountedTotal.toFixed(2));
    }
}

function showSummary() {
    console.log("Shopping Cart Summary");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].title + " - " + products[i].price + " x " + products[i].quantity);
    }
    calculations();
}

addItems({ id: 2, title: "Smartphone", price: 699.49, quantity: 1 });
addItems({ id: 5, title: "Smartwatch", price: 299.49, quantity: 2 });
removeItems(3);
showSummary();

console.log(products);
