let numArray = [23, 5, 34, 66, 75, 56, 33, 65];
let max = numArray[0];
let min = numArray[0];
for (const element of numArray) {
    if(element > max)
        max = element;
    if (element < min)
        min = element;
}
console.log("Max:", max);
console.log("Min:", min);



let cities = new Array('Tokyo', 'Toronto', 'New York');
let reversedCities = [];
for (const element of cities) {
    reversedCities.unshift(element);
}
console.log(cities);
console.log(reversedCities);

cities.reverse();
console.log('cities:', cities);


let numArray2 = [3, 5, 2, 5, 5, 8, 3, 3, 9];
let sum = 0;
for (const element of numArray2) {
    sum += element;
}
console.log("Sum:",sum);


let numArray3 = [3, 5, 2, 5, 5, 8, 3, 3, 9];
let numArray4 =  numArray3.map(element => element * 2);
console.log(numArray4);