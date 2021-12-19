// use {}
const user = {};

// use Object create
const userByObj = Object.create({ userName: "Gal" });

// using __proto__ to access the main JS obect.

function Product(category, price, name) {
  this.Category = category;
  this.Price = price;
  this.Name = name;
}

Product.prototype.printProduct = function () {
  console.log(`${this.Name} => ${this.Category}`);
};

const product = new Product("drinks", 12, "beer");
