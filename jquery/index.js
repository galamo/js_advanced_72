

// Object.prototype.navaValue = function(v){ if(!v){ return this.value} else { this.value = v  }  }

$(document).ready(init)

function init() {

    $("#searchButton").on("click", function () {
        const searchInputValue = $("#searchInput").val()
        $("#content").append(`<h2>${searchInputValue}</h2>`)
        
    })

    // ziporiValue("searchInput", "ZiporiCar111") // required another ipmlemenation
    // document.querySelector("#searchInput").navaValue() // required prototype change
    // const ziporiCar = document.getElementById("searchInput")
    // ziporiCar.value = "ZiporiCar"
}

const arr = [{ user: "yonatan", age: 30 }, { user: "zipori", age: 20 }]
arr.filter(function (u) { return u.age < 25 }).map(function (u) { return u.user })

// function ziporiValue(id, value) {
//     const theEl = document.querySelector(`#${id}`)
//     if (value) {
//         theEl.value = value;
//         return;
//     }
//     else {
//         return theEl.value
//     }

// }

// param
// 2 params
//  array
// object

// function css(param,param2){
//     typeof param === 'object' &&   Array.isArray(param) // multiple get
//     typeof param === 'object // multiple set
//     typeof param === 'string' && param2 ===  undefined // get
//     typeof param === 'string' && param2 ===  "string" // set
// }

function css() {
    console.log(arguments)
}

// undefined
// css("color")
// VM580:2 Arguments ['color', callee: ƒ, Symbol(Symbol.iterator): ƒ]0: "color"callee: ƒ css()length: 1Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
// undefined
// css("color", "red")
// VM580:2 Arguments(2) ['color', 'red', callee: ƒ, Symbol(Symbol.iterator): ƒ]0: "color"1: "red"callee: ƒ css()length: 2Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
// undefined
// css(["color","font"])
// VM580:2 Arguments [Array(2), callee: ƒ, Symbol(Symbol.iterator): ƒ]0: (2) ['color', 'font']0: "color"1: "font"length: 2[[Prototype]]: Array(0)callee: ƒ css()length: 1Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
// undefined
// css({color:"red"})
// VM580:2 Arguments [{…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: color: "red"[[Prototype]]: Objectcallee: ƒ css()length: 1Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
// undefined
