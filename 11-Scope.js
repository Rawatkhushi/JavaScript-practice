//the reason of conflict of var with scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);//not defined
// console.log(b); //not defined
console.log(c); //30-even if the scope of c has been over

//block scope and global scope
let ab = 1;
if (true) {
  let ab = 100;
  console.log(ab); //100
}
console.log(ab); //1

//scope level and mini hoisting
function one() {
  const name = "vanshika";
  function two() {
    const age = 20;
    console.log(name);
  }

  //   console.log(age);//age is not defined because the scpe of age has ended

  two();
}

one(); //-->vanshika

//same scope concept can be extended to if-else as well

// -----------hoisting intro-----------

//method-1 for functions

console.log(add1(4));
function add1(num) {
  return num + 1;
}

//method-2 for functions or an "expression"

console.log(add2(4)); //error: Cannot access 'add2' before initialization

const add2 = function (num) {
  return num + 2;
};
