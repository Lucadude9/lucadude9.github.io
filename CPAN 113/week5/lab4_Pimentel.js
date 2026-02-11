//Task1
console.log('Task 1');

function calculateSum(a, b) {
    return a + b;
}
console.log("Sum:", calculateSum(5, 10));




const calculateProduct = function(a, b) {
    return a * b;
};
console.log("Product:", calculateProduct(4, 7)); // 28





const calculateDifference = (a, b) => a - b;
console.log("Difference:", calculateDifference(10, 3)); // 7




//Task2
console.log('\nTask 2');

function calculateAverage(...numbers) {
    if (numbers.length === 0) return 0;
    let total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}
console.log("Average:", calculateAverage(10, 20, 30, 40));



function greetUser(name = "Guest") {
    return `Hello ${name}`;
}
console.log(greetUser());
console.log(greetUser("Lucas"));




function totalArguments() {
    let total = 0;
    for (const element of arguments) {
        total += element;
    }
    return total;
}
console.log("Total number of arguments:", totalArguments(1, 2, 3, 4, 5)); // 15



//Task3
console.log('\nTask 3');

function createUser(username, role) {
    return {
        username: username,
        role: role
    };
}
const user1 = createUser("lucas123", "admin");
console.log("User objects:", user1);



function isPositive(number) {
    return number > 0;
}
console.log("Is 5 positive?:", isPositive(5));   
console.log("is -3 positive?:", isPositive(-3));  




function logMessage(message) {
    console.log("Message:", message);
}
let result = logMessage("This function does not return anything.");
console.log("return value:", result);





//Task4
console.log('\nTask 4');

function outerMessage() {
    let message = "This is a message from the outer function.";
    return function() {
        console.log(message);
    };
}
const innerFunction = outerMessage();
innerFunction();





function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}
const counter = createCounter();
console.log("Initial value:", counter.getValue());
console.log("increment:", counter.increment());
console.log("increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Final value:", counter.getValue());
