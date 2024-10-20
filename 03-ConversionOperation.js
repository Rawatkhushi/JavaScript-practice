let a = "123";
let b = Number(a);
// console.log(typeof b);
// console.log(b);

let x = 1;
let y = Boolean(x);
console.log(typeof y);
console.log(y);

//similarly, coversions are Number(), String(), Boolean()

console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 1 + 2);
console.log(1 + 1 + "2");

console.log(true); //-->true
console.log(+true); //-->1
// console.log(true+); not possible
console.log(+""); //-->0

let num1, num2, num3;
// num1 = num2 = num3 = 4 not a good way of assigning values

let x1 = 3; //postfix increment
const y1 = x++;
// x is 4; y is 3

let x2 = 3; //prefix increment
const y2 = ++x;
// x is 4; y is 4

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
