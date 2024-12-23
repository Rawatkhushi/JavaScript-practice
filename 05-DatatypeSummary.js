//primitve-Number, String, Symbol, BigInt, undefined, Boolean, null
//reference type(non-primitve) - Arrays, Objects, functions

const a = Symbol("123");
const b = Symbol("123");
console.log(a === b); //-->false

const x = 637849573622638495054n; //'n' is used for declaring BigInt

const y = ["khushi", "rawat"]; //declaring an array

let obj = {
  name: "khushi", //values inside curly braces are objects(be it number, string, arrays or anything else)
  age: 20,
};

const myfunc = function () {
  console.log("hello there!");
};

console.log(typeof myfunc); //-->function
console.log(typeof a); //-->symbol

let user1 = "khushirawat";
let user2 = user1;
user2 = "khushi";
console.log(user1); //-->khushirawat
console.log(user2); //-->khushi
//primitve data types are call by value therefore no change is made to user1

let fun1 = {
  name: "sarthak",
  age: 12,
};
let fun2 = fun1;
fun2.name = "gaurav";
console.log(fun1); //-->name:gaurav, age:12
console.log(fun2); //-->name:gaurav, age:12
// non primitves are call by reference therefore fun1 gets modified by changes in fun2
