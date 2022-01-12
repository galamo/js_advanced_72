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
    constructor(type, level, abilities, power) {
        this.id = Math.ceil(Math.random() * 9999)
        this.level = level
        this.power = power
        this.type = type
        this.abilities = abilities
    }

    attack() {
        console.log(`${this.type} attacks with level ${this.level}`)
    }

    getLevel() {
        return this.level
    }

    setLevel(value) {
        if (value < 0) return;
        this.level = value
    }


    getPower() {
        return this.power + this.level
    }

    setPower(value) {
        this.power = value
    }

    get typeField() {
        return this.type
    }

    set typeField(value) {
        this.type = value
    }

    get strength() {
        console.log(1111)
        return this.level * this.power
    }

}

const warrior1 = new Warrior("archer", 10, ["magic arrow"], 50)
