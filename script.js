let from = document.getElementById("select1");
let to = document.getElementById("select2");
let input = document.getElementById("input");
let output = document.getElementById("output");

fetch("https://api.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((res) => dropdown(res));
function dropdown(res) {
  let curr = Object.entries(res);
  for (let i = 0; i < curr.length; i++) {
    let option = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    from.innerHTML += option;
    to.innerHTML += option;
  }
}
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let curr1 = from.value;
  let curr2 = to.value;
  let input1 = input.value;
  convert(curr1, curr2, input1);
});
function convert(curr1, curr2, input1) {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${input1}&from=${curr1}&to=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
      output.value=Object.values(data.rates)[0]
    });
}
