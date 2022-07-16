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

// // Drop down shit
// const petrolButton = document.getElementById("petrol");
// const dieselButton = document.getElementById("diesel");
// petrolButton.addEventListener("click", petrolClick);
// dieselButton.addEventListener("click", dieselClick);

// Fuels
let fuelsDropDown = document.getElementById("fuels");

function Fuel(name, price) {
  this.name = name;
  this.price = price;
  this.showDetails = function () {
    document.getElementById("price").value = price;
    document.getElementById("dropdownMenu2").innerHTML = name;
  };
  this.createButton = function () {
    const button = document.createElement("button");
    button.classList.add("dropdown-item");
    button.innerHTML = this.name;
    button.addEventListener("click", this.showDetails);
    fuelsDropDown.append(button);
  };
  this.createButton()
}

// Define fuels
let petrol = new Fuel("Petrol", 191);
let diesel = new Fuel("Diesel", 199);
let lpg = new Fuel("LPG", 85)
let noFuel = new Fuel("Select fuel")


// Cars
let carsDropDown = document.getElementById("cars");

function Car(name, mileage, fuel) {
  this.name = name;
  this.mileage = mileage;
  this.fuel = fuel
  this.showDetails = function () {
    document.getElementById("mpg").value = mileage;
    document.getElementById("dropdownMenu3").innerHTML = name;
    if (fuel == "petrol") {
      petrol.showDetails()
    } else if (fuel == "diesel") {
      diesel.showDetails()
    } else if (fuel == "lpg") {
      lpg.showDetails()
    } else if (fuel == "") {
      noFuel.showDetails()
    }
  };
  this.createButton = function () {
    const button = document.createElement("button");
    button.classList.add("dropdown-item");
    button.innerHTML = this.name;
    button.addEventListener("click", this.showDetails);
    carsDropDown.append(button);
  };
  this.createButton()
}

// Define cars
let fordFiesta = new Car("Ford Fiesta", 40, "petrol");
let vwGolf = new Car("VW Golf", 39, "diesel");
let vwPolo = new Car("VW Polo", 45, "lpg");
let skodaFabia = new Car("Skoda Fabia", 50, "petrol")
let none = new Car("Select car", "", "")


