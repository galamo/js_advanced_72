

const ApiBaseUrl = `http://localhost:3200`;


$(document).ready(init)

function init() {

    $("#searchButton").on("click", function () {
        const searchInputValue = $("#searchInput").val()
        $("#content").append(`<h2>${searchInputValue}</h2>`)

    })

    getAllFruits()

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

