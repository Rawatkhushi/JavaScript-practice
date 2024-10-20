const a = "khushi-rawat";
const b = 123;
// console.log("the name is " + a + " and the id is " + b);   this is more traditional

console.log(`the name is ${a} and the id is ${b}`);

const x = new String("khushi"); //another way of declaring a string
console.log(x[1]); //fetching the indexed value of a string

console.log(x.__proto__);

console.log(x.length); //finding the length of the code

console.log(x.charAt(2)); //fetching the value at index
console.log(x.indexOf("u")); //fetching the index of a value

const ab = x.substring(0, 4); //slicing the string excluding the last digit
console.log(ab);

const bc = x.slice(-4, 4); //slicing with -ve values excluding the last digit
console.log(bc);

const cd = "    khushi    ";
const de = cd.trim(cd); //trim the extra spaces
console.log(de);
console.log(cd); //original string being the same(primitive)
//also there exist methods like trimStart() and trimEnd()

const url = "https://linkedin.com/khushi%20rawat/"; //the space in url will be translated to %20 by java therefore
console.log(url.replace("%20", "-"));

console.log(url.includes("https")); //returns true/false

console.log(a.split("-")); //splits and returns an arrray
