// Loop - repetition
// For
for(let i =0; i < 10; i++){ 
    //what i is = to
    // number of times u want i to run
    //how much i increases/decreases each time
    console.log(i+1,"Lucas");
}

//let n = 12;
for(let n=15; n <= 17; n++){
    console.log('\n', n);
    for(let i=1; i <= 5; i++){ 
        console.log(i, 'x', n, '=', i*n);
    }
}

// While
let y = 0;
while(y<5){
    console.log('Hello');
    y++;
}

// Do while
let z = 0;
do {
    console.log('Hello');
    z++;
}while(z < 5)