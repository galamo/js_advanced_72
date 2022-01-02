// Callback

function order() {
  setTimeout(function () {
    console.log("You order recieved!");
  }, 4000);
}
function rank() {
  function callback() {
    console.log("Thanks for ranking us");
  }
  setTimeout(callback, 1000);
}

function syncOperation() {
  console.log(Math.ceil(Math.random() * 9999));
}

// Promise
// Object that describe completion or rejection of async operation

function rankPromise(rank) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof rank === "number") {
        return resolve("Thanks for Ranking us!!!!!");
      } else {
        return reject("Missing Rank!!!");
      }
    }, 3000);
  });
}

rankPromise(5)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (reason) {
    console.log(reason);
  });

// fetch
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
function callServer() {
  fetch(url)
    .then(function (result) {
      console.log(result);
      console.log("firstThen");
      return result.json();
    })
    .then(function (response) {
      theCallback(response); // This function will be executed when the response from API resolved
    })
    .catch(function (failure) {
      alert("Something went wrong");
    });
}

function theCallback(response) {
  const { sprites } = response;
  console.log(sprites.front_shiny);
  const image = document.createElement("img");
  image.src = sprites.front_shiny;
  image.width = 400;
  image.height = 400;
  document.querySelector("#content").append(image);
}

function callApiXhr() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function (e) {
    console.log(xhr.response.currencies);
    console.log(Object.keys(xhr.response[0].currencies)[0]);
    const currency = Object.keys(xhr.response[0].currencies)[0];
    // another request!!!!
    const url = `https://rest.coinapi.io/v1/exchangerate/${
      document.querySelector("#crypto").value
    }/${currency}?apikey=0D4CEC5E-51C9-4799-8D05-E04AEF465AA2`;
    const xhrCoin = new XMLHttpRequest();
    xhrCoin.onload = function () {
      console.log(xhrCoin.response.rate);
    };
    xhrCoin.open("GET", url);
    xhrCoin.responseType = "json";
    xhrCoin.send();
  };
  xhr.onerror = function (e) {
    alert("Something went wrong with XHR");
  };
  xhr.open(
    "GET",
    `https://restcountries.com/v3.1/name/${
      document.querySelector("#country").value
    }`
  );
  xhr.responseType = "json";
  xhr.send();
}

function callApiFetch() {
  const countryName = document.querySelector("#country").value;
  if (!countryName) return;
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(_resolveCountry)
    .then(_resolveCountryJson)
    .catch(_rejectCountry);

  function _resolveCountry(response) {
    return response.json();
  }
  function _resolveCountryJson(response) {
    console.log(response[0].name);
  }
  function _rejectCountry() {
      alert("something went wrong")
  }
}
// coin api : API Key: 0D4CEC5E-51C9-4799-8D05-E04AEF465AA2
