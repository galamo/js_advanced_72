
const USERS_API = "https://jsonplaceholder.typicode.com/users"

$(document).ready(init)

function init() {
    $.get(USERS_API).then(_successGetUsers).catch(_errorGetUsers)

    function _successGetUsers(response) {
        const cities = _getCities(response)
        _drawCitiesHeaders(cities)
    }
    function _errorGetUsers(error) {
        alert("Something went wrong!")
    }
    function _getCities(users) {
        if (!Array.isArray(users)) return;
        let citiesObj = {}
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.address && user.address.city) {
                citiesObj[user.address.city] = true;
            }
        }
        return Object.keys(citiesObj)
    }
    function _drawCitiesHeaders(cities) {
        for (let index = 0; index < cities.length; index++) {
            const city = cities[index];
            // const headerElement = document.createElement("h1")
            const headerElement = $("<h1>").text(city)
            $("#content").append(headerElement)
        }
    }

}
