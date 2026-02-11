let students = ['bob', 'sam', 'amy', 'ben'];
printArrayElements(students);
// for (const element of students){
//     console.log(element);
// }


let cities = ['toronto', 'vancouver', 'tokyo'];
printArrayElements(cities);

function printArrayElements(arr){
    console.log();
    for (const element of arr){
        console.log(element);
    }
}

let printArray = function(arr){
    console.log(arr);
}

printArray(cities);