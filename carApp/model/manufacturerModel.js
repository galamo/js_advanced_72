function Manufacturer(country, city, address, manufacturerName) {
    this.country = country
    this.city = city
    this.address = address
    this.manufacturerName = manufacturerName
    this.id = `${address}-${city}-${country}`
}