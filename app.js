const calculate = () => {
  let mpg = document.getElementById("mpg").value;
  let distance = document.getElementById("distance").value;
  let price = document.getElementById("price").value;
  let cost = ((distance / (mpg / 4.54609)) * price) / 100;
  cost = parseFloat(cost).toFixed(2);
  document.getElementById(
    "cost"
  ).innerHTML = `This journey would cost: £${cost}`;
};

buttons = ["Calculate"];

for (let index = 0; index < buttons.length; index++) {
  const button = document.createElement("button");
  button.innerHTML = buttons[index];
  button.addEventListener("click", calculate);
  button.type = "button";
  button.classList.add("btn", "btn-primary", "shadow");
  document.getElementById("buttons").append(button);
}
