// {} .
// object.create
// function constructor
// class



// function Warrior(type, level, abilities) {
//     this.id = Math.ceil(Math.random() * 9999)
//     this.level = level
//     this.type = type
//     this.abilities = abilities
// }


class Warrior {
    constructor(name, level) {
        this.id = Math.ceil(Math.random() * 9999)
        this.level = level
        this.name = name
    }
    attack() {
        console.log(`${this.name} attacks with level ${this.level}`)
    }
}

class Archer extends Warrior {
    constructor(numberOfArrows, name, level) {
        super(name, level)
        this.numberOfArrows = numberOfArrows;
        this.bowLevel = 0
    }
}

const warrior1 = new Warrior("warrior1", 10)
const archer1 = new Archer(50, "archer1", 10)