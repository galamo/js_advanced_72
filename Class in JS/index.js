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
        this.armorLevel = 0;
    }
    attack() {
        console.log(`${this.name} attacks with level ${this.level}`)
    }
}

class Archer extends Warrior {
    constructor(name, level) {
        super(name, level)
        this.numberOfArrows = 0;
        this.bowLevel = 0
    }

    attack() {
        if (this.numberOfArrows <= 0) return;
        this.numberOfArrows = this.numberOfArrows - 5
        console.log(`Archer ${this.name} attacks with bow level ${this.bowLevel}`)
    }

    setNumberOfArrows(value) {
        if (typeof value !== "number") throw new Error("You must insert Number ");
        this.numberOfArrows = value
    }
}

class SwordMan extends Warrior {
    constructor(name, level) {
        super(name, level)
        this.swordLevel = 0;
    }
    attack() {
        console.log(`Sword man ${this.name} attacks with swordLevel ${this.swordLevel}`)
    }
}

const warrior1 = new Warrior("warrior1", 10)
const archer1 = new Archer("archer1", 10, 50)
const swordman1 = new SwordMan("swordMan1", 50)
// warrior1.attack()
// archer1.attack()
// swordman1.attack()a

const warrios = [warrior1, archer1, swordman1]
function startWar() {
    warrios.forEach(warrior => { warrior.attack() })
}


const testwarrior = new Archer();

const archerCopy = new Archer(testwarrior.name, testwarrior.numberOfArrows, testwarrior.level)
