

const ApiBaseUrl = `http://localhost:3200`;


$(document).ready(init)

function init() {

    $("#searchButton").on("click", function () {
        addFruit()
    })



    getAllFruits()

}
function addFruit() {
    const fruitsUrl = "fruit"
    const currentFruit = $("#searchInput").val()
    if (!currentFruit) return;
    fetch(`${ApiBaseUrl}/${fruitsUrl}/${currentFruit}`).then(_setJson).then(_addFruitSuccess).catch(_setError)
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
function getAllFruits() {
    const fruitsUrl = "fruits"
    fetch(`${ApiBaseUrl}/${fruitsUrl}`).then(_setJson).then(_loadFruits).catch(_setError)

    function _setJson(response) {
        return response.json()
    }

    function _loadFruits(ArrayOfFruits) {
        console.log(ArrayOfFruits)
    }

    function _setError(error) {
        console.log(error)
    }

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