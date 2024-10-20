console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
//these basic comparions with integers run smoothly

console.log("2" > 1);
console.log("02" > 1);
//string is automatically converted to integer for the comparison, which can create confusion

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//this is because equality operator(==) works differently than (>=,<=) and thus, null in the third line is automatically assumed to be 0 for the comparison.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("2" === 2);
//this is because (===) is a strict equality operator, means that it will give error while comparing two diff data types.
