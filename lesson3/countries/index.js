// console.log(countries);

// Static list!
// const capitals = ["valleta", "jerusalem", "WDC", "Paris", "Madrid", "Rome"];
// const currencies = ["eur", "usd", "Nis"];
// const continents = ["Asia", "Europe", "Africa", "America"];

// Dynamic list based on our data:
// region: "Europe"
// startOfWeek: "monday"
// status: "officially-assigned"
// subregion: "Northern Europe"

function Value(value, text) {
  this.value = value;
  this.text = text;
}

const searchBy = [
  new Value("startOfWeek", "Start Of the Week"),
  new Value("status", "Status"),
  new Value("region", "Regions"),
  new Value("independent", "Ind"),
  new Value("subregion", "subregion"),
];

function drawOptionsElements(list, selectElRef) {
  const optionsElements = list.map(function (searchByValue) {
    return _getOptionsElement(searchByValue);
  });
  selectElRef.innerHTML = "";
  selectElRef.append(...optionsElements);
  function _getOptionsElement(searchByValue) {
    const option = document.createElement("option");
    option.innerText = searchByValue.text;
    option.value = searchByValue.value;
    return option;
  }
}
drawOptionsElements(searchBy, document.querySelector("#searchBy"));

function searchByChanged() {
  const selectedValue = document.querySelector("#searchBy").value;
  const values = getList(selectedValue);
  const result = values.map(function (currentRegion) {
    return new Value(currentRegion, currentRegion.toUpperCase());
  });
  drawOptionsElements(result, document.querySelector("#searchValues"));
}

function getList(key) {
  const list = countries.reduce(function (listKolShehu, country) {
    return { ...listKolShehu, [country[key]]: true };
  }, {});
  console.log(Object.keys(list).filter((item) => item));
  return Object.keys(list).filter((item) => item !== "undefined");
}

// function getTotalPopulation() {
//   return countries.reduce(function (total, country, index, allData) {
//     return total + country.population;
//   }, 0);
// }

function getRegions() {
  return countries.map(function (country) {
    return country.region;
  });
}

function getDistinctregions() {
  const result = getRegions();
  const regions = {};
  for (let index = 0; index < result.length; index++) {
    regions[result[index]] = true;
  }
  return Object.keys(regions);
}
