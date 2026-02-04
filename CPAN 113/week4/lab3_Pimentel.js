//Task1
console.log('Task 1')
let students = ['Bob', 'Tom', 'Mike'];

let grades = new Array(40,58,87);

let isPresent = Array.of(true, false, false)

//task2
console.log('Task 2')
console.log(students[0]);
grades[1] = 75;
console.log(grades);


//task3
console.log('Task 3')
students.push('Lucas');
console.log(students);

isPresent.pop();
console.log(isPresent);

//task4
console.log('Task 4')
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

grades.forEach(grade => console.log(grade));

for (let attendance of isPresent) {
  console.log(attendance);
}


for ([index, student] of students.entries()) {
  console.log(`Index: ${index}, Student: ${student}`);
}

//task5
console.log('Task 5')
let passedGrades = grades.filter(grade => grade >= 50);
console.log(passedGrades);

let doubledGrades = grades.map(num => num * 2);
console.log(doubledGrades);