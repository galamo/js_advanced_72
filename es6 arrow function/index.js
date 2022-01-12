function sayHi(name) {
    console.log("hi" + name)
    return true;
}


const sayHiReg = function () { }
const sayHiArrow = (name) => {
    console.log("hi" + name)
    return true;
}

const getName = (name) => `Hi ${name}`

// Syntax
// function -> function () { }
// arrow -> () => { }

// return
// function -> using return
// arrow -> no need implicit return ( one liner )

// this
// function -> Yes
// arrow -> No


const user = {
    name: "gal",
    getName: () => this.name, // this = window.name OR the code that runs user obj
    getNameFn: function () { return this.name } // this = gal
}


