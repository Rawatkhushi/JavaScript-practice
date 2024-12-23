//Object.create()

const mySym = Symbol("key1");

const jsuser = {
  name: "khushi",
  surname: "rawat",
  //   mySym: "mykey1",
  [mySym]: "mykey1",
  age: 20,
  location: " Jaipur",
  email: "123abc@gmail.com",
  isloggedin: false,
  lastlogindays: ["monday", "wednesday"],
};

console.log(jsuser.email); //accessing elements
console.log(jsuser["email"]); //another method to access

console.log(jsuser[mySym]); //we have included symbol as a key in object but it has not been used correctly
console.log(typeof jsuser[mySym]); //its output is string not Symbol
console.log(jsuser); //here type of mySym in Symbol

jsuser.email = "khushi123@gmail.com"; //modifying
console.log(jsuser["email"]);

// Object.freeze(jsuser); //freezing for no change
jsuser.name = "gaurav";
console.log(jsuser["name"]);

jsuser.greeting = function () {
  console.log("hello, there!");
};
console.log(jsuser.greeting); //anonymous function
console.log(jsuser.greeting());

jsuser.greeting2 = function () {
  console.log(`Hello there, ${this.name}`);
};
console.log(jsuser.greeting2()); //anonymous function

//OBJECTS-2

//const tinderuser = new Object(); //returns empty object {}-singleton object
const tinderuser = {}; //returns empty object {}-a non singleton object
tinderuser.email = "abc123@gmail.com";
tinderuser.name = "khushi";
tinderuser.isLoggedIn = false;

console.log(tinderuser);
console.log(Object.keys(tinderuser)); //[ 'email', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser)); //[ 'abc123@gmail.com', 'khushi', false ]
console.log(Object.entries(tinderuser)); //[ [ 'email', 'abc123@gmail.com' ],[ 'name', 'khushi' ],[ 'isLoggedIn', false ] ]
console.log(tinderuser.hasOwnProperty("surname")); //false

const regularUser = {
  email: "abc123@gmail.com",
  fullname: {
    user_fullname: {
      firstname: "khushi",
      lastname: "rawat",
    },
  },
};
console.log(regularUser.fullname.user_fullname.lastname); //accessing objects inside objects

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
//const obj3 = Object.assign({}, obj1, obj2); //merging  two objects
const obj3 = { ...obj1, ...obj2 }; //merging two objects through spread operator
console.log(obj3);

const users = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
];

//DESTRUCTURING  OF OBJECTS

const course = {
  coursename: "js",
  price: 500,
  course_review: "good",
};
//course.coursename

const { coursename } = course; //instead of writing course.coursename again and again
console.log(coursename);

const { course_review: review } = course; //initializing course_review as review
console.log(review);

// JSON-format
// {
//     "name" : "khushi",
//     "surname" : "rawat",
//     "age" : 20
// }
