//IIFE- Immediately Invoked Function Expressions

function wow() {
  console.log("hey there");
}
wow();

//or

(function wow2() {
  console.log("hey there again");
})();

//or

(() => {
  console.log("hey there again again");
})();

//or

((name) => {
  console.log(`welcome ${name}`);
})("rawat");
