function Manufacturer(country, city, address, manufacturerName) {
    this.country = country
    this.city = city
    this.address = address
    this.manufacturerName = manufacturerName
    this.id = generateId(`${address} ${city} ${country}`)
}

function generateId(str) {
    return btoa(str).substring(0, 10)
}