// const coding = ["khushi", "rawat"];
// const val = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(val); //undefined
// //can't store values

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const mynum = nums.filter((key) => key > 4); //a callback function(fxn with no name) => condition on which it filters
// console.log(mynum); //[ 5, 6, 7, 8, 9 ]
// //the value gets stores in mynum

//iterating while condition checking in forEach - alternative for filter
const newnums = [];
nums.forEach((item) => {
  if (item > 4) {
    newnums.push(item);
  }
});
console.log(newnums); //[ 5, 6, 7, 8, 9 ]

//example
const books = [
  {
    title: "one",
    genre: "fiction",
    publish: "1993",
  },
  {
    title: "two",
    genre: "non-fiction",
    publish: "1999",
  },
  {
    title: "three",
    genre: "science",
    publish: "2013",
  },
  {
    title: "four",
    genre: "history",
    publish: "2007",
  },
  {
    title: "five",
    genre: "drama",
    publish: "2024",
  },
  {
    title: "six",
    genre: "science",
    publish: "2016",
  },
];

//filtering books with genre science
const newbooks = books.filter((item) => {
  return item.genre === "science";
});

console.log(newbooks);
// [
//     { title: 'three', genre: 'science', publish: '2013' },
//     { title: 'six', genre: 'science', publish: '2016' }
// ]

//filtering books published after 2000 adn genre science
const newbooks1 = books.filter((item) => {
  return (item.publish > 2000) & (item.genre === "science");
});
console.log(newbooks1);
// [
//     { title: 'three', genre: 'science', publish: '2013' },
//     { title: 'six', genre: 'science', publish: '2016' }
// ]
