//primitve-Number, String, Symbol, BigInt, undefined, Boolean, null
//reference type(non-primitve) - Arrays, Objects, functions

const a = Symbol("123");
const b = Symbol("123");
console.log(a === b); //-->false

const x = 637849573622638495054n; //'n' is used for declaring BigInt

const y = ["khushi", "rawat"]; //declaring an array

let obj = {
  name: "khushi", //alues inside curly braces are objects(be it number, string, arrays or anything else)
  age: 20,
};

const myfunc = function () {
  console.log("hello there!");
};

console.log(typeof myfunc); //-->function
console.log(typeof a);
