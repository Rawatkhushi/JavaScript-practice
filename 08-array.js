//arrays in js are resizable and can contain heterogeneous elements
const myarr = [1, 2, 3, 4, 5, 6, 7]; //declaration 2
const myarr2 = new Array(1, 2, 3, 4, 5, 6); //declaration 2
console.log(myarr[0]); //accessing elements

//shallow copy- copies that share the same reference (original copy gets affected with any change)
//deep copy- copies that dn't share the same reference (files remains unaffected)

const myarr3 = new Array(1, 2, 7, "khushi");
console.log(myarr3[3]);

//Array Methods
myarr.push(6);
myarr.pop(6);
myarr.unshift(0); //puts the element at the beginning
myarr.shift(0); //removes the first element
console.log(myarr);

console.log(myarr.includes(3));
console.log(myarr.indexOf(3));

const myarr4 = myarr.join(); // joins two arrays but converts them into strings
console.log(myarr);
console.log(myarr4);
console.log(typeof myarr4);

console.log("A", myarr);

const a = myarr.slice(1, 4);
console.log(a);
console.log(myarr);

console.log(myarr.splice(0, 3));
console.log(myarr.splice(1, 0, "khushi")); //adds khushi to 1 index replacing 0 elements
console.log(myarr);

console.log(myarr.splice(2, 1, "rawat")); //replaces 1 element at 2 index with rawat
console.log(myarr);

console.log(myarr.splice(3, 1, "happy", "happy")); //replaces 1 element at 2nd index with rawat happy
console.log(myarr);

//note- slice cuts out a portion of array(exluding the last range) keeping the original array unaffected but splice affects the original array and prints out the elements being removed or replaced

//Arrays-2

const arr = ["pretty", "nice"];
myarr.push(arr);
console.log(myarr); //[ 1, 2, 3, 4, 5, 6, 7, [ 'pretty', 'nice' ] ] treats arr as single element

const arr2 = myarr.concat(arr);
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7, 'pretty', 'nice' ] adds arrays and store it in a new variable

const bc = [...myarr, ...arr]; //SPREAD OPERATOR
console.log(bc); //[ 1, 2, 3, 4, 5, 6, 7, 'pretty', 'nice' ] same thing without concat

console.log(...myarr, ...arr); //1 2 3 4 5 6 7 pretty nice

const cc = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, 11], 12]];
console.log(cc.flat(Infinity)); //[1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12] converts multi d array into single d array
console.log(cc.flat(1)); //only converts upto 1 degree

console.log(Array.isArray(myarr)); //true-returns true if it is an array
console.log(Array.from("khushi")); //[ 'k', 'h', 'u', 's', 'h', 'i' ] converts passed parameter into array

console.log(Array.from({ name: "khushi" })); //[]

let ab = 100;
let b = 200;
let c = 300;

console.log(Array.of(ab, b, c)); //[ 100, 200, 300 ]
