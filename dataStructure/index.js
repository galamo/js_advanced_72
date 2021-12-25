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

const state = {
  types: ["mazda", "kia", "bmw", "rangerover", "ferari"],
  colors: ["red", "pink", "yellow", "white", "black"],
  engines: [1200, 1400, 1500, 1600, 2000],
  doors: [2, 3, 4, 5],
  ranks: ["a", "b", "c", "d"]
};

const carsArray = [];
const carsObj = {};
const { types, colors, engines, doors, ranks } = state;
function generateCars() {
  for (let index = 0; index < 99; index++) {
    const type = types[Math.floor(Math.random() * 5)];
    const color = colors[Math.floor(Math.random() * 5)];
    const engine = engines[Math.floor(Math.random() * 5)];
    const numberOfdoors = doors[Math.floor(Math.random() * 4)];
    const rankofCar = ranks[Math.floor(Math.random() * 4)];
    const currentCar = new Car(type, color, engine, numberOfdoors, rankofCar);
    carsArray.push(currentCar);
    carsObj[currentCar.lp] = currentCar;
  }
}

function Car(_type, _color, _engine, _doors, _rank) {
  this.type = _type;
  this.lp = generateLP();
  this.color = _color;
  this.engine = _engine;
  this.door = _doors;
  this.rank = _rank
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

function init() {
  const keySelectOption = document.querySelector("#searchBy");
  const findBtn = document.querySelector("#searchNew");
  findBtn.addEventListener("click", newSearch)
  const options = Object.keys(state).map(function (prop) {
    return _getOptionElement(prop);

  });

  keySelectOption.append(...options);
  selectKey();
}

function selectKey() {
  const keySelectOption = document.querySelector("#searchBy");
  const valuesSelectOption = document.querySelector("#searchValue");
  const arrayOfOptions = state[keySelectOption.value];
  const options = arrayOfOptions.map(function (value) {
    return _getOptionElement(value);
  });
  valuesSelectOption.innerHTML = "";
  valuesSelectOption.append(...options);
}

function _getOptionElement(prop) {
  const option = document.createElement("option");
  option.value = prop;
  option.innerText = prop;
  return option;
}

function newSearch() {
  const type = document.querySelector("#searchBy").value;
  const fixtype = type.toString().slice(0, -1);
  const innerType = document.querySelector("#searchValue").value;
  const newArray = Object.entries(carsObj).filter(function (current) {
    return current[1][`${fixtype}`].toString() === innerType.toString();
  })
  console.log(newArray)
  return newArray
}

init();
generateCars();
