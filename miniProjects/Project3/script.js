const data = document.querySelector(".clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  data.innerHTML = date.toLocaleTimeString();
}, 1000);
