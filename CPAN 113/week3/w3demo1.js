let age = 12;

// if (age < 18) {
//     console.log('Teenager');
// } else if (age < 13) {
//     console.log('Child');
// } else {
//     console.log('Adult');
// }


if (age < 18) {
    console.log('Teenager');
} else if (age < 13) {
    console.log('Child');
} else {
    console.log('Adult');
}


if (age >= 13 && age < 18){
    console.log('Teenager');
} else {
    console.log('Not teenager');
}

//(true && true) == true   both have to be true for && to work


age = 14;
if (age >= 13 || age < 18){ // || is the OR symbol
    console.log('Teenager');
} else {
    console.log('Not teenager');
}

if (!age < 13 || age >= 60){ 
    // '!' means not so its checking if the age is not less than 13 
    // so if it is less than 13 its false

}