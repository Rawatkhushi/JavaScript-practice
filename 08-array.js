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
