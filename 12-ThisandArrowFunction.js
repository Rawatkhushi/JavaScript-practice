const user = {
  name: "khushi",
  age: 20,
  welcome: function () {
    // console.log(`${name} , welcome to the website`); name is @deprecated : refers to features that are still available but are planned for removal in future versions of the language or browser APIs
    console.log(`${this.name} , welcome to the website`);
    console.log(this);
  },
};
user.welcome(); //-->khushi , welcome to the website { name: 'khushi', age: 20, welcome: [Function: welcome] }
user.name = "bhavna";
user.welcome(); //--> bhavna , welcome to the website { name: 'bhavna', age: 20, welcome: [Function: welcome] }
console.log(this); //-->{}

function one() {
  console.log(this);
}
one(); //gives you a whole lot of stuff

const two = function () {
  const name = "yoohooo";
  console.log(this.name);
};
two(); //-->undefined

/*'this' in Regular Functions: In a regular function (not an arrow function), the value of 'this' depends on how the function is called:

If called as a method of an object, 'this' refers to that object.
If called as a standalone function, 'this' in non-strict mode defaults to the global object (window in browsers or global in Node.js). In strict mode, 'this' is undefined.
In 'This' Case:

two() is called as a standalone function.
If you're in strict mode (which is common), 'this' is undefined, and undefined.name does not exist, so it results in undefined.*/

//arrow function
/* basic syntax
() => {}
*/

const add2 = (num1, num2) => {
  return num1 + num2;
};
console.log(add2(2, 3));

//or

const add3 = (num1, num2) => num1 + num2;
console.log(add3(2, 3));

//curly braces m wrap krke return keyword likhna pdega, but with parenthesis it is not used
