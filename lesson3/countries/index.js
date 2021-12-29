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

const FILTER_CONFIG = {
  currencies: {
    getListExcplicit: getCurrencies,
    filterExcplicit: filterByCurrency,
  },
  borders: { getListExcplicit: getBorders, filterExcplicit: filterByBorders },
};

const searchBy = [
  new Value("startOfWeek", "Start Of the Week"),
  new Value("status", "Status"),
  new Value("region", "Regions"),
  new Value("independent", "Ind"),
  new Value("subregion", "subregion"),
  new Value("unMember", "Am i union memeber?"),
  new Value("currencies", "currencies"),
  new Value("borders", "Borders"),
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

let globalCountries = [];
function init() {
  countries.push(null); // simulated as returned from API/Server
  globalCountries = countries.filter((c) => c);
  console.log(globalCountries);
  drawOptionsElements(searchBy, document.querySelector("#searchBy"));
  searchByChanged();
  document.querySelector("#filter").addEventListener("click", function () {
    const searchBy = document.querySelector("#searchBy").value;
    const searchValue = document.querySelector("#searchValues").value;
    // let result = [];
    const filterFn = FILTER_CONFIG[searchBy]
      ? FILTER_CONFIG[searchBy].filterExcplicit
      : filterAll;
    // if (searchBy === CURRENCY_KEY) {
    //   result = gslobalCountries.filter(function (c) {
    //     return c[searchBy] && c[searchBy].hasOwnProperty(searchValue);
    //   });
    // } else {
    //   result = globalCountries.filter(function (c) {
    //     return (
    //       c[searchBy] &&
    //       c[searchBy].toString().toLowerCase() === lowerCaseSearchValue
    //     );
    //   });
    // }

    draw(filterFn(searchBy, searchValue));
  });
}

function filterAll(searchBy, searchValue) {
  const lowerCaseSearchValue = searchValue.toString().toLowerCase();
  return globalCountries.filter(function (c) {
    return (
      c[searchBy] &&
      c[searchBy].toString().toLowerCase() === lowerCaseSearchValue
    );
  });
}
function filterByCurrency(searchBy, currency) {
  const upperCaseCurrency = currency.toString().toUpperCase();
  return globalCountries.filter(function (c) {
    return c[searchBy] && c[searchBy].hasOwnProperty(upperCaseCurrency);
  });
}

function filterByBorders(searchBy, border) {
  const upperCaseBorder = border.toString().toUpperCase();
  return globalCountries.filter(function (c) {
    return c[searchBy] && c[searchBy].indexOf(upperCaseBorder) >= 0;
  });
}

function draw(result) {
  document.querySelector("#content").innerText = JSON.stringify(result);
}
init();

function searchByChanged() {
  const selectedValue = document.querySelector("#searchBy").value;
  //   const values =
  //     selectedValue === "currencies" ? getCurrencies() : getList(selectedValue);
  //   let values = [];
  const getListFn = FILTER_CONFIG[selectedValue]
    ? FILTER_CONFIG[selectedValue].getListExcplicit
    : getList;
  //   if (selectedValue === CURRENCY_KEY) {
  //     values = getCurrencies();
  //   } else {
  //     values = getList(selectedValue);
  //   }
  const values = getListFn(selectedValue).sort(function (a, b) {
    return a.localeCompare(b);
  });
  const result = values.map(function (currentRegion) {
    return new Value(currentRegion, currentRegion.toUpperCase());
  });
  drawOptionsElements(result, document.querySelector("#searchValues"));
}

function getList(key) {
  const list = globalCountries.reduce(function (listKolShehu, country) {
    return { ...listKolShehu, [country[key]]: true };
  }, {});
  return Object.keys(list).filter((item) => item !== "undefined");
}

// function getTotalPopulation() {
//   return globalCountries.reduce(function (total, country, index, allData) {
//     return total + country.population;
//   }, 0);
// }

function getRegions() {
  return globalCountries.map(function (country) {
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
// abuse getCurrncies to fetch also
// languages
// translations
//
function getCurrencies() {
  const distinctCu = globalCountries.reduce(function (currenciesObj, country) {
    const currentCurrnecies = country.currencies;
    if (!currentCurrnecies) return currenciesObj;
    const currenciesKeys = Object.keys(currentCurrnecies);
    currenciesKeys.forEach(function (currency) {
      currenciesObj[currency] = true;
    });
    return currenciesObj;
  }, {});
  return Object.keys(distinctCu);
}

function getBorders() {
  const distinctBorders = globalCountries.reduce(function (
    bordersObj,
    country
  ) {
    const borders = country.borders;
    if (!Array.isArray(borders)) return bordersObj;
    borders.forEach(function (borderCountry) {
      bordersObj[borderCountry] = true;
    });
    return bordersObj;
  },
  {});
  return Object.keys(distinctBorders);
}
