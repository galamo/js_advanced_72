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

function callServer() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
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
