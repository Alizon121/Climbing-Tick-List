// I am making a grocery list that will take in an item, a price, and number of persons argument.
// The grocery list will be able to be used to keep track of items and prices to allow
// a certain number of persons to split a bill.

// We need to write a helper funciton that will add items to the items list
let items = {
"Dave's Bagels" : 5.99,
"Lucerne Milk" : 4.99,
"Broccoli florets" : 2.99,
"Sweet Potatoes" : 0.99,
}


function addItem(item, price) {
for (let groceryItem in items) {
    if (groceryItem === item) {
        items[groceryItem] += items[groceryItem]
    }
    else {
        items[item] = price;
    }

    return items
}

// if (!checkedOutItems.has())
}

console.log(addItem("Tomato", 1.99))


function paymentDivide(price, people) {
    return price / people
}


let splitWise = function(items, people) {

let count = 0;

for (let item in items) {
    if (item === "Dave's Bagels") {
        count+=items[item]
    }
    if (item === "Lucerne Milk") {
        count+=items[item]
    }
    if (item === "Broccoli florets") {
        count += items[item]
    }
    if (item === "Sweet Potatoes") {
        count+=items[item]
    }
}

return paymentDivide(count, people).toFixed(2)
}


// console.log(splitWise(items, 3))