function SayHello() {
  console.log("HELLO!!");
}
SayHello();

function AddTwoNumbers(num1, num2) {
  //we need not define the type of parameters in js
  return num1 + num2;
}
// const result = AddTwoNumbers(3, "4"); //34
// const result = AddTwoNumbers(3, "a"); //3a
const result = AddTwoNumbers(3, 7);
// console.log(result);

function isLoggedIn(username) {
  return `${username} just logged in`;
}
console.log(isLoggedIn("khushi"));
console.log(isLoggedIn()); //undefined just logged in

//or we can do this
function isLoggedin2(username = "sam") {
  //default value is sam
  if (username == undefined) {
    //or if(!username)
    console.log("please enter a username!");
    return;
  }
  return `${username} just logged in`;
}
console.log(isLoggedin2());

//functions with objects and array in js

function CalculateCartPrice(num1) {
  return num1;
}
console.log(CalculateCartPrice(2));
//here its difficult to find out how many items the user is going to pass as arguments in the functions, so method 2: using Rest operator

function CalculateCartPrice2(...num1) {
  return num1;
}
console.log(CalculateCartPrice2(100, 200, 300)); //[ 100, 200, 300 ]
//Rest and Spread operator is the same 3 dots. depends on where you use it

function CalculateCartPrice3(val1, val2, ...num1) {
  return num1;
}
console.log(CalculateCartPrice3(100, 200, 300, 400)); //[ 300, 400 ]-(val1-100, val2-200, num1-[300,400])

//passing object in a function
const user = {
  name: "khushi",
  age: 20,
};
function HandleObject(anyobject) {
  console.log(`the name is ${anyobject.name} and the age is ${anyobject.age}`);
}
//method2-passing object directly
// HandleObject({
//   name: "gaurav",
//   age: 21,
// });

//passing arrays in function
const newarr = [100, 200, 300];
function returnSecondValue(anyarray) {
  return anyarray[1];
}
console.log(returnSecondValue(newarr)); //200
