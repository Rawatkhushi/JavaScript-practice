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

// console.log(jsuser.surname);//surname not defined
console.log(jsuser["surname"]);

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
console.log(jsuser.greeting); //anonyous function
console.log(jsuser.greeting());

jsuser.greeting2 = function () {
  console.log(`Hello there, ${this.name}`);
};
console.log(jsuser.greeting2()); //anonyous function
