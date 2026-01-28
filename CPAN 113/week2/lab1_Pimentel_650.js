//Task 1
let initials = 'LP';
let last3Digits = 650;
const studentKey = `${initials.toUpperCase()}-${last3Digits}`;
console.log('Student Key', studentKey);


//Task 2
let name = 'Lucas';
let idSuffix = 650;
let course = 'CPAN 113';
let isactive = true;
let skills = ["HTML", "JavaScript", "CSS", 'React'];
//console.log(skills[3]);
let targets = {weeklyHours: 10, goal: "Learn JavaScript"};
console.log(`Profile type checks: name=${typeof name}, idSuffix=${typeof idSuffix}, skillsIsArray=${Array.isArray(skills)}`);


//Task 3
initials = 'AB';
last3Digits += 1 ;
//studentKey = 5;
// studentKey = `${initials.toUpperCase()}-${last3Digits}`;
// TypeError: Assignment to constant variable.
const labConfig = { term: "Winter 2026" };
//labConfig = {}; //TypeError
labConfig.term = "Fall 2025";
//console.log(labConfig.term);


//Task 4
let itemA = (last3Digits % 10) + 2.25;
let itemB = ((last3Digits % 7) * 0.75) + 1.50;
let itemC = ((last3Digits % 5) * 1.10) + 3.10;
console.log(`Recipt: A=$${itemA}, B=$${itemB}, C=$${itemC}`);
let subtotal = itemA + itemB + itemC;
let tax = subtotal * 0.13;
let total = subtotal + tax;
console.log(`Subtotal=$${subtotal.toFixed(2)}, Tax=$${tax.toFixed(2)}, Total=$${total.toFixed(2)}`);


//Task 5
let asNumber = 345;
let asText = '345';
console.log(`Equality: == ${asNumber == asText}, === ${asNumber === asText}`)


//Task 6
//PartA
let budget = (last3Digits % 10) + 10;
if (total <= budget){
    console.log(`Budget check: Within budget (under by $${(budget-total).toFixed(2)})`);
} else {
    console.log(`Budget check: Over budget (exceeded by $${(Math.abs(budget-total)).toFixed(2)})`);
}
//PartB
let theme = last3Digits % 4;
switch (theme) {
    case 0:
        console.log('Theme:', "JavaScript is a fun easy language to learn!");
        break;

    case 1:
        console.log('Theme:', "JavaScript is native to all browsers!");
        break;
        
    case 2:
        console.log('Theme:', "JavaScript is the language of the web!");
        break;

    case 3:
        console.log('Theme:', "JavaScript is cool!");
        break;

    default:
        break;
}



//Task 7
let signatureNumber = (last3Digits * 7) + Math.floor(total);
const labSignature = `${studentKey}-${signatureNumber}`;
console.log('Lab Signature:', labSignature)