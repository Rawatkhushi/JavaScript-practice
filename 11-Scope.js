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
