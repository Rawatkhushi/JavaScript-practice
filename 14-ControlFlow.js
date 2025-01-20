// if (2 === "2") {
//   console.log("both are same");
// } else {
//   console.log("both are not same");
// }

//scope without using curly braces, though its a bad practice
// if (2!=3)  console.log("both are not same) console.log("executed");

if (2 == 2 && true) {
  console.log("AND operation");
}
if (true || false) {
  console.log("OR operation");
}

//switch case

const month = 2;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("march");
    break;
  default:
    console.log("default case");
    break;
}
//in js, after the execution of one case, it will execute all the code below it including other cases except default case, so break is used.

//falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values- "0", 'false', " ", [], {}, function(){}

const useremail = [];
if (useremail.length === 0) {
  console.log("Array is empty");
}
//false == 0, true == 1, false == '', true == '1', 0 == '', 0 == '0', false == '0' all are true
console.log(0 == "0");
console.log(false == "0");

// nullish Coalescing Operator (??): null, undefined - does satefy check for assigning(value if given, null oterwise)
let val1;
val1 = 5 ?? 10;
console.log(val1); //5
val1 = null ?? 10;
console.log(val1); //10
val1 = undefined ?? 10;
console.log(val1); //10
val1 = null ?? 10 ?? 15;
console.log(val1); //10

//ternary operator
// condition ? true:false;

const abc = 100;
abc == 80 ? console.log("80") : console.log("more than 80");
