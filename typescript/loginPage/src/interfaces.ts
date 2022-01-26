interface ICircle {
    diameter: string
}

interface IDoors {
    nodoors: number;
}

class Car implements ICircle, IDoors {
    diameter: string
    nodoors: number;
    constructor(_v: string) {
        this.diameter = _v
        this.nodoors = 4
    }
}

class Track implements ICircle {
    static totalNumberOfDrives = 0
    static numberOfTracks = 0
    public diameter: string
    numberOfDrives: number
    private km: number;
    private lp: string;
    constructor(_d: string, _lp?: string) {
        this.diameter = _d
        this.numberOfDrives = 0
        this.km = 0;
        this.lp = _lp
        Track.numberOfTracks++

    }

    drive(_km: number) {
        console.log("driving", this.diameter)
        this.km += _km
        this.numberOfDrives++
        Track.totalNumberOfDrives++;
    }

    static getAllTacksDrives() {
        return Track.totalNumberOfDrives
    }

    static getNumberOfTracks() {
        return Track.numberOfTracks;
    }

    getLp() {
        return this.lp
    }
}

const t = new Track("30inch")
t.drive(12)
const t2 = new Track("32inch")
t2.drive(32)
// t.createTack() this medhod is not accessibale from instance
console.log(Track.getAllTacksDrives())

console.log(t.getLp())


Track.getNumberOfTracks()





abstract class Employee {
    protected empName: string;
    public empCode: number

    constructor(empName: string, empCode: number) {
        this.empName = empName
        this.empCode = empCode
    }

    sayHi(): void {
        console.log(this.empName, this.empCode)
    }
}

class SalesManager extends Employee {

    public salary: number
    constructor(name: string, code: number, salary: number) {
        super(name, code)
        this.salary = salary + 10000
    }

    getEmpName() {
        return this.empName

    }
    // static SalesMangerCreator() {
    //     return new SalesManager("s", 1, 1)
    // }
}


const emp = new SalesManager("", 1, 5000)
emp.sayHi()
console.log(emp.getEmpName())











class BankAccount {
    private id: string
    private amount: number
    constructor() {
        this.id = BankAccount.CreateAccountId()
        this.amount = 0
    }

    deposit(amount: number) {
        // !!!
        this.amount += amount
    }
    static CreateAccountId() {
        return `BankAccount_${Math.ceil(Math.random() * 9999999999)}${new Date().getTime()}`
    }
}

const b = new BankAccount()
console.log(b)
b.deposit(5000)
b.deposit(9999999)
