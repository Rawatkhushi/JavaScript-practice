const form = document.querySelector("form");

//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   const height = parseInt(document.querySelector("#height").value); //string to int parse
  //   const weight = parseInt(document.querySelector("#weight").value); //string to int parse

  //parseInt() is too forgiving , if an alphanumeric is passed like "abc12" it is prevent it by returning NaN, but if something like "123abc" is passed, it will return "12"
  //Insyead use Number(), it is stricter also allows floating point values too
  const height = Number(document.querySelector("#height").value); //string to int parse
  const weight = Number(document.querySelector("#weight").value); //string to int parse
  const results = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //showing the results
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.5) {
      results.style.color = "#feba17";
    } else if (bmi > 18.5 && bmi < 24.9) {
      results.style.color = "green";
    } else {
      results.style.color = "red";
    }
  }
});
