//let students = ['bob', 'tim', 'amy', 'sam'];

let cities = new Array(5);
let cities2 = new Array(5,10);
let canadianCities = new Array ('Toronto', 'Hamilton', 'Ajax');





console.log(cities);
console.log(cities2);
console.log(canadianCities);




let students = ['bob', 'tim', 'amy', 'sam'];
console.log(students[0]);
console.log(students[0]);
students[0] = 'Paul';
students[4] = 'Tim';

students.push('Jon');
console.log(students);

console.log(students.pop());
console.log(students);

students.unshift('Matt');
console.log(students)
students.shift();
console.log(students)

let selectedStudents = students.slice(1,4);
console.log(selectedStudents);
console.log(students);
students.splice(2,2)
console.log(students);
students.splice(1,0, 'john', "Eva", "Ava");
console.log(students);
