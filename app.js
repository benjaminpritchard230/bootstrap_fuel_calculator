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

const petrolClick = () => {
  console.log("petrol clicked");
  document.getElementById("price").value = "189";
  document.getElementById("dropdownMenu2").innerHTML = "Petrol";
};

const dieselClick = () => {
  console.log("diesel clicked");
  document.getElementById("price").value = "195";
  document.getElementById("dropdownMenu2").innerHTML = "Diesel";
};

// Drop down shit
const petrolButton = document.getElementById("petrol");
const dieselButton = document.getElementById("diesel");
petrolButton.addEventListener("click", petrolClick);
dieselButton.addEventListener("click", dieselClick);
