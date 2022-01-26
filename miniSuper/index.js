

const ApiBaseUrl = `http://localhost:3200`;


$(document).ready(init)

function init() {

    $("#searchButton").on("click", function () {
        addFruit()
    })

    Promise.race([getAllFish(), getAllFruits()]).then((results) => {
        console.log(results)
        // drawMiniSuper("fishData", results[0])
        // drawMiniSuper("fruitsData", results[1])
    }).catch(ex => {
        alert("Failed!!!!")
    })




}
function addFruit() {
    const fruitsUrl = "fruit"
    const currentFruit = $("#searchInput").val()
    const payload = { fruit: currentFruit }
    if (!currentFruit) return;
    fetch(`${ApiBaseUrl}/${fruitsUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(_setJson).then(_addFruitSuccess).catch(_setError)

    function _setJson(response) {
        return response.json()
    }

    function _addFruitSuccess(message) {
        popUpSuccessModal()
        getAllFruits()
    }
    function _setError(ex) {
        console.log(ex)
    }
}
async function getAllFruits() {
    const fruitsUrl = "fruits"
    try {
        const result = await fetch(`${ApiBaseUrl}/${fruitsUrl}`);
        const resultJson = await result.json()
        return resultJson
        // _loadFruits(resultJson)
    } catch (error) {
        throw new Error()
        _setError(error)
    }

    function _loadFruits(ArrayOfFruits) {
        drawMiniSuper("fruitsData", ArrayOfFruits)
    }

    function _setError(error) {
        console.log(error)
    }

}

async function getAllFish() {
    const fishUrl = "fish"
    try {
        const result = await fetch(`${ApiBaseUrl}/${fishUrl}`);
        const resultJson = await result.json()
        return resultJson
        // _loadFish(resultJson)
    } catch (error) {
        throw new Error()
        _setError(error)
    }

    function _loadFish(arrayOfFish) {
        drawMiniSuper("fishData", arrayOfFish)
    }

    function _setError(error) {
        console.log(error)
    }

}






function drawMiniSuper(category, data) {
    if (!Array.isArray(data)) return;
    const content = document.querySelector(`#${category}`)
    const h1List = data.map(msItem => {
        console.log(msItem)
        const h1 = document.createElement("h1")
        h1.innerText = msItem;
        return h1
    })

    content.append(...h1List)
}



function popUpSuccessModal() {
    $("#alertModalSuccess").css({ visibility: "visible" })
    setTimeout(function () {
        $("#alertModalSuccess").css({ visibility: "hidden" })
    }, 5000);
}

function printMe(str, options = {}) {
    const isUpper = options.upper
    const whatToPrint = isUpper ? str.toUpperCase() : str
    console.log(whatToPrint)
}