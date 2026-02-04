//Arrays
//course notes week 4 arrays



// Create an array with three string elements using the Array constructor
let fruits = new Array('Apple', 'Banana', 'Mango');
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango']

let emptyArray = [];


// Declare an array of three elements using array literal notation
let animals = ['Cat', 'Dog', 'Elephant'];
console.log(animals); // Output: ['Cat', 'Dog', 'Elephant']



// Use Array.of() to create an array with three numbers
let scores = Array.of(85, 92, 78);
console.log(scores); // Output: [85, 92, 78]

// Use Array.of() to create an array with three numbers
scores = Array.of(85, 92, 78);
console.log(scores); // Output: [85, 92, 78]

fruits[1] = 'blueberry'; // ['apple', 'blueberry', 'cherry']
fruits[3] = 'date'; // ['apple', 'blueberry', 'cherry', 'date']


let vegetables = ['Carrot', 'Broccoli'];
// Add a new element to the end of the array
vegetables.push('Spinach');
console.log(vegetables); // Output: ['Carrot', 'Broccoli', 'Spinach']

let drinks = ['Water', 'Juice', 'Soda'];
// Remove the last element from the array
let lastDrink = drinks.pop();
console.log(lastDrink); // Output: 'Soda'
console.log(drinks); // Output: ['Water', 'Juice']

let numberOfFruits = fruits.length; // 4\



for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



for (let fruit of fruits) {
    console.log(fruit);
}



animals = ['dog', 'cat', 'bird'];
console.log(animals.length); // 3
 
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
 
// Alternative iteration
for (let animal of animals) {
    console.log(animal);
}


let ages = [22, 15, 30, 19, 17];
// Filter ages greater than or equal to 18
let adultAges = ages.filter(age => age >= 18);
console.log(adultAges); // Output: [22, 30, 19]


let numbers = [2, 4, 6, 8];
// Square each number
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [4, 16, 36, 64]




let hobbies = ['Reading', 'Hiking', 'Coding'];
// Print each hobby to the console
hobbies.forEach(hobby => console.log(hobby));


scores = [85, 90, 78];
// Iterate over the scores array
for (let score of scores) {
  console.log(score);
}


let distances = [5, 10, 15];
// Iterate over the distances array using a for loop
for (let i = 0; i < distances.length; i++) {
  console.log(distances[i]);
}



let cities = ['Toronto', 'Vancouver', 'Montreal'];
// Get the iterator for index and element pairs
for (let [index, city] of cities.entries()) {
  console.log(`Index: ${index}, City: ${city}`);
}

