// Array
// Object
// Stack
// Queue

// Array
// push
// get - by index
// for loop
// 1000 N O(N)
// O(1)
// for (let index = 0; index < array.length; index++) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//          O(N^2)
//     }
// }

// Object
// { user:gal } => obj[user]

const carsTypes = ["mazda", "kia", "bmw", "rangerover", "ferari"];
const colors = ["red", "pink", "yellow", "white", "black"];
const engines = [1200, 1400, 1500, 1600, 2000];

const carsArray = [];
const carsObj = {};
function generateCars() {
  for (let index = 0; index < 999999; index++) {
    const type = carsTypes[Math.floor(Math.random() * 5)];
    const color = colors[Math.floor(Math.random() * 5)];
    const engine = engines[Math.floor(Math.random() * 5)];
    const currentCar = new Car(type, color, engine);
    carsArray.push(currentCar);
    carsObj[currentCar.lp] = currentCar;
  }
}

function Car(_type, _color, _engine) {
  this.type = _type;
  this.lp = generateLP();
  this.color = _color;
  this.engine = _engine;
}

function generateLP() {
  return Math.floor(Math.random() * 99999999).toString();
}
{
  /* <button onclick="searchCarArray()">Search in Array</button> */
}
{
  /* <button onclick="searchCarObj()">Search in Obj</button> */
}

function searchCarArray() {
  const lp = document.getElementById("lp").value;
  const result = carsArray.filter(function (car) {
    return car.lp === lp;
  });
  console.log(result);
}
function searchCarObj() {
  const lp = document.getElementById("lp").value;
  const result = carsObj[lp];
  console.log(result);
}

generateCars();
