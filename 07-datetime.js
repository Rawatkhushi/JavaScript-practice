let mydate = new Date();
console.log(mydate); //raw unreadable random variables
console.log(mydate.toString()); //somewhat readable date and time
console.log(mydate.toDateString()); //readable date only in words
console.log(mydate.toISOString()); //readable date only
console.log(mydate.toJSON()); //readable date only
console.log(mydate.toLocaleDateString()); //readable date in numbers
console.log(mydate.toLocaleTimeString()); //readable time (hr,min,sec)

console.log(typeof mydate); //object

let mydate2 = new Date(2024, 10, 10, 11, 55, 34); //months start from 0 in an array
console.log(mydate2.toString()); //Sun Nov 10 2024 11:55:34

let mydate3 = new Date("11-10-2024"); //months start from 0 in js
console.log(mydate3.toString()); //Sun Nov 10 2024 11:55:34

let mytimestamp = Date.now(); //milliseconds from 1 jan,1970
console.log(mytimestamp);
console.log(mydate3.getTime()); ///miliseconds from the date defined in mydate3

console.log(Math.floor(Date.now() / 1000)); //converting current date into seconds

let mydate4 = new Date();
console.log(mydate4.getDay()); //days start from monday
console.log(mydate4.getMonth()); // months start from 0

date4.toLocaleString("default", {
  weekday: "long",
}); //customizing how you want the output of localestring function
