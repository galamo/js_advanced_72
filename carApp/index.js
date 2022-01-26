const DOM = {
    searchButton: null,
    searchInput: null,
    alertModal: null,
    content: null
}

const MANUFACTURER_API = `https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails`
const COUNTRY_API = `https://restcountries.com/v3.1/name`

const state = { manufacturers: [] }
function init() {
    DOM.searchButton = document.querySelector("#searchButton")
    DOM.searchInput = document.querySelector("#searchInput")
    DOM.alertModal = document.querySelector("#alertModal")
    DOM.content = document.querySelector("#content")

    DOM.searchButton.addEventListener("click", searchButtonAction)

}

function searchButtonAction() {
    const value = DOM.searchInput.value
    if (!value) return;
    drawLoader()
    const params = `${value}?format=json`
    // fetch(`${MANUFACTURER_API}/${params}`)
    //     .then(_setJsonReponse)
    //     .then(_setManufacturesResponse)
    //     .catch(_setErrorResponse)

    // $.ajax({
    //     url: `${MANUFACTURER_API}/${params}`,
    //     method: "GET",
    //     dataType: "json",
    //     success: _setManufacturesResponse,
    //     error: _setErrorResponse
    // })

    try {
        
    } catch (error) {
        _setErrorResponse(error)
    }

    function _setJsonReponse(response) {
        return response.json()
    }
    function _setManufacturesResponse(response) {
        const manufacturers = manufacturerFactory(response.Results)
        state.manufacturers = manufacturers
        draw()

    }
    function _setErrorResponse(error) {
        if (DOM.alertModal) {
            DOM.alertModal.style.visibility = "visible"
            setTimeout(function () {
                DOM.alertModal.style.visibility = "hidden"
            }, 5000);
        }
    }

}
init()

// Model layer
function manufacturerFactory(data) {
    if (!Array.isArray(data)) return;
    return data.map(function (m) {
        return new Manufacturer(m.Country, m.City, m.Address, m.Mfr_CommonName)
    })
}

// Presentaional layer

function draw() {
    const cards = state.manufacturers.map(function (m) {
        return getCard(m)
    })
    clearDOMContent()
    DOM.content.append(...cards)
}

function drawLoader() {
    clearDOMContent()
    DOM.content.append(getLoader())
}

function clearDOMContent() {
    DOM.content.innerHTML = ""
}

function getLoader() {
    const divLoader = document.createElement("div")
    divLoader.className = "loader"
    divLoader.style.height = "100px"
    divLoader.style.width = "100px"
    return divLoader
}

function getCard(data) {
    const mainDiv = document.createElement("div")
    mainDiv.id = data.id
    mainDiv.className = "card";
    mainDiv.style.width = "18rem"
    mainDiv.style.height = "450px"
    mainDiv.style.overflow = "auto"


    const image = document.createElement("img")
    image.src = "https://www.topgear.com/sites/default/files/2021/09/309035_Honda_Civic_Type_R_Sportline.jpg"
    image.className = "card-img-top p-3"
    image.alt = "No Image"

    const secondaryDiv = document.createElement("div")
    secondaryDiv.className = "card-body"

    const header = document.createElement("h5")
    header.className = "card-title"
    header.innerText = data.manufacturerName

    const p1 = document.createElement("p")
    p1.id = "country"
    p1.innerText = data.country

    const p2 = document.createElement("p")
    p2.innerText = data.city

    const p3 = document.createElement("p")
    p3.innerText = data.address

    const moreInfo = document.createElement("button")
    moreInfo.className = "btn btn-primary"
    moreInfo.innerText = "Click for more"
    moreInfo.addEventListener("click", function () {
        getManufacturerCountry(data)
    })
    secondaryDiv.append(header, p1, p2, p3, moreInfo)
    mainDiv.append(image, secondaryDiv)
    return mainDiv

}

function getManufacturerCountry(data) {
    const country = data.country;

    $.get(`${COUNTRY_API}/${country}`).done(_setCountryReponse).fail(_setErrorResponse)

    // fetch(`${COUNTRY_API}/${country}`)
    //     .then(_setJsonReponse)
    //     .then(_setCountryReponse)
    //     .catch(_setErrorResponse)
    // this function can be reused!
    function _setJsonReponse(response) {
        return response.json()
    }
    function _setCountryReponse(response) {
        // this function can be divided to more functions 
        console.log(response)
        if (!response[0] || !response[0].flags) return
        console.log(response[0].flags.png)
        // Create Image => JS
        // const flagImage = document.createElement("img")
        // flagImage.src = response[0].flags.png
        // flagImage.height = 100;
        // flagImage.width = 100
        // Create Image => Jquery
        const flagImageJquery = $("<img/>").attr({ src: response[0].flags.png, height: 100, width: 100 })

        // Append image => Jquery
        $(`#${data.id}`).find("#country").append(flagImageJquery)

        // Append Image => JS
        // document.getElementById(data.id).querySelector("#country").append(flagImage)
    }
    function _setErrorResponse(error) {
        if (DOM.alertModal) {
            DOM.alertModal.style.visibility = "visible"
            setTimeout(function () {
                DOM.alertModal.style.visibility = "hidden"
            }, 5000);
        }
    }
}