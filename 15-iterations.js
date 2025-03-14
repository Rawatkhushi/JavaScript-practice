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
