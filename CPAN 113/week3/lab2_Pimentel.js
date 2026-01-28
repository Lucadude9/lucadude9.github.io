//TASK1 1
console.log('TASK 1');
//Q1
let temp = 15;
if (temp < 10){
    console.log('It is COLD outside');
}else if (temp <= 25){
    console.log('It is WARM outside');
}else{
    console.log('It is HOT outside');
}

//Q2
let day = 'Wednesday';
switch (day){
    case 'Saturday':
    case 'Sunday':
        console.log('It is the Weekend');
        break;
    
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('It is a Weekday');
        break;

    default:
        console.log('Invalid Day')
        break;
}



//TASK 2
console.log('TASK 2');
//Q1
let num = 10;
while(num>0){
    console.log(num);
    num--;
}

//Q2
num = 4;
let multiplier = 1;
do {
    console.log(num, 'x', multiplier, '=', num*multiplier);
    multiplier++;
}while(multiplier <= 6)

//Q3
let shoppingList = ["Milk", "Eggs", "Bread", 'Apples'];
for(let i=0; i < shoppingList.length; i++){
    console.log(shoppingList[i]);
}


//TASK 3
console.log('TASK 3');
//Q1
const user = {name: 'Lucas', age: 19, city: 'Toronto'}
for (const key in user){
    console.log(key+':',user[key]);
}

//Q2
let scores = [88, 92, 75, 91, 85];
for(const element of scores){
    console.log(element);
}


//TASK 4
console.log('TASK 4');
//Q1
for(let i=0; i < 10; i++){
    console.log(i);
    if(i == 7)
        break;
}

//Q2
let words = ["cat", "elephant", "dog", "hippopotamus", "ant"];
for(let i=0; i < words.length; i++){
    if (words[i].length >= 5){
        console.log(words[i]);
    }else{
    }
}