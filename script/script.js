const button = document.querySelector(".button");
const displayText = document.querySelector(".detail");

function CarProp(
  model,
  color,
  price,
  wheel,
  type,
  weight,
  features,
  topSpeed,
  manufacturedYear,
  seatCapacity
) {
  this.model = model;
  this.color = color;
  this.price = price;
  this.wheel = wheel;
  this.type = type;
  this.weight = weight;
  this.features = features;
  this.topSpeed = topSpeed;
  this.manufacturedYear = manufacturedYear;
  this.seatCapacity = seatCapacity;
  this.describe = () => {
    let describe = `This is a ${this.color} ${this.type} with the model ${
      this.model
    }. It has a top speed of ${this.topSpeed} mph and was manufactured in ${
      this.manufacturedYear
    }. The seating capacity is ${this.seatCapacity}. It weights ${
      this.weight
    } lb and the wheel is ${
      this.wheel
    }. It has the features like ${this.features.join(
      ", "
    )}. And the price is $${this.price}`;
    return describe;
  };
}

const car1 = new CarProp(
  "Res-Q",
  "blue",
  "30.55",
  "aluminium",
  "fire engine truck",
  69,
  ["light", "ladder", "fire extinguishers, thermal imaging cameras"],
  80,
  2018,
  8,
  1.99
);
button.addEventListener("click", () => {
  displayText.textContent = car1.describe();
});

console.log(car1.describe());
