const colors = document.querySelectorAll(".button");
const body = document.querySelector("body");
colors.forEach(function (x) {
  console.log(x);
  x.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target);
    if (e.target.id === "lightgrey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightcoral") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightgreen") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightblue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function (x) {
  body.style.backgroundColor = "white";
});
