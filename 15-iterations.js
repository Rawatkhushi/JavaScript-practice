for (let index = 0; index < 10; index++) {
  const element = index;
  console.log(element);
}
//we cant use const because index++ wont be done due to the object being constant, therefore let is used.

for (let i = 1; i < 6; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
  console.log();
}

let abc = ["khushi", "rawat", "gaurav"];
for (let i = 0; i < abc.length; i++) {
  const element = abc[i];
  console.log(element);
}

//break and continue

// break- breaks out of the loop
// continue- skips the rest of instructions inside the curr iteration and jumps on to the next iteration

//while loop
let index = 0;
while (index <= 10) {
  console.log(`value of index ${index}`);
  index++;
}

let myarr = ["khushi", "rawat", "is"];
let arr = 0;
while (arr < myarr.length) {
  console.log(`value: ${myarr[arr]}`);
  arr++;
}

//do-while loop
let score = 11;
do {
  console.log(`value: ${score}`); //value: 11
  score++;
} while (score <= 10);

//for of loop
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  console.log(i);
}
const str = "khushi rawat";
for (const i of str) {
  console.log(`each char is : ${i}`);
}

//Maps
const map = new Map();
map.set("khushi", "rawat");
map.set("gaurav", "sharma");
map.set("shanaya", "chaudhary");
console.log(map);

for (const [key, value] of map) {
  console.log(key, "+", value);
  // khushi + rawat
  // gaurav + sharma
  // shanaya + chaudhary
}

//for-in loop on maps
for (const key in map) {
  console.log(key); //maps are not iteratable
}

//for-of loop on object

const myobj = {
  name1: "ps5",
  name2: "mario",
};

for (const [key, value] of myobj) {
  console.log(key, "+", value); //myobj is not iteratable for for-of loop
}

//for-in loop on objects
const myobj1 = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myobj1) {
  // console.log(key);
  // js
  // cpp
  // rb
  // swift
  console.log(`${key} is for ${myobj1[key]}`);
  // js is for javascript
  // cpp is for c++
  // rb is for ruby
  // swift is for swift by apple
}

//for-in loop on arrays
const arr1 = ["khushi", "rawat", "gaurav", "sharma"];

for (const key in arr1) {
  console.log(key); //0 1 2 3
  console.log(arr1[key]); //khushi rawat gaurav sharma
}

//for-each loop by callback function on array
const blah = ["a", "b", "c", "d", "e"];
blah.forEach(function (key) {
  console.log(key); //a b c d e
});
//for-each loop by arrow function on array
blah.forEach((key) => {
  console.log(key); //a b c d e
});
function printme(item) {
  console.log(item);
}
blah.forEach(printme); //a b c d e

//for-each also has access to index and the whole array in each iteration
blah.forEach((item, index, arr) => {
  console.log(item, index, arr);
  // a 0 [ 'a', 'b', 'c', 'd', 'e' ]
  // b 1 [ 'a', 'b', 'c', 'd', 'e' ]
  // c 2 [ 'a', 'b', 'c', 'd', 'e' ]
  // d 3 [ 'a', 'b', 'c', 'd', 'e' ]
  // e 4 [ 'a', 'b', 'c', 'd', 'e' ]
});

//for-each on array containing objects
const superarr = [
  {
    name: "javascript",
    ext: "js",
  },
  {
    name: "python",
    ext: "py",
  },
  {
    name: "c++",
    ext: "cpp",
  },
];

superarr.forEach((item) => {
  console.log(item);
  // { name: 'javascript', ext: 'js' }
  // { name: 'python', ext: 'py' }
  // { name: 'c++', ext: 'cpp' }
  console.log(item.ext);
  // js
  // py
  // cpp
});
