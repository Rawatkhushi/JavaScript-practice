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
