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
};

const carsArray = [];
const carsObj = {};
const { types, colors, engines, doors } = state;


function Car(_type, _color, _engine, _doors) {
  this.type = _type;
  this.lp = generateLP();
  this.color = _color;
  this.engine = _engine;
  this.numberOfDoors = _doors;
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

init();
generateCars();
