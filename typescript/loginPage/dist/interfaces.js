class Car {
    constructor(_v) {
        this.diameter = _v;
        this.nodoors = 4;
    }
}
class Track {
    constructor(_d, _lp) {
        this.diameter = _d;
        this.numberOfDrives = 0;
        this.km = 0;
        this.lp = _lp;
        Track.numberOfTracks++;
    }
    drive(_km) {
        console.log("driving", this.diameter);
        this.km += _km;
        this.numberOfDrives++;
        Track.totalNumberOfDrives++;
    }
    static getAllTacksDrives() {
        return Track.totalNumberOfDrives;
    }
    static getNumberOfTracks() {
        return Track.numberOfTracks;
    }
    getLp() {
        return this.lp;
    }
}
Track.totalNumberOfDrives = 0;
Track.numberOfTracks = 0;
const t = new Track("30inch");
t.drive(12);
const t2 = new Track("32inch");
t2.drive(32);
// t.createTack() this medhod is not accessibale from instance
console.log(Track.getAllTacksDrives());
console.log(t.getLp());
Track.getNumberOfTracks();
class Employee {
    constructor(empName, empCode) {
        this.empName = empName;
        this.empCode = empCode;
    }
    sayHi() {
        console.log(this.empName, this.empCode);
    }
}
class SalesManager extends Employee {
    constructor(name, code, salary) {
        super(name, code);
        this.salary = salary + 10000;
    }
    getEmpName() {
        return this.empName;
    }
}
const emp = new SalesManager("", 1, 5000);
emp.sayHi();
console.log(emp.getEmpName());
class BankAccount {
    constructor() {
        this.id = BankAccount.CreateAccountId();
        this.amount = 0;
    }
    deposit(amount) {
        // !!!
        this.amount += amount;
    }
    static CreateAccountId() {
        return `BankAccount_${Math.ceil(Math.random() * 9999999999)}${new Date().getTime()}`;
    }
}
const b = new BankAccount();
console.log(b);
b.deposit(5000);
b.deposit(9999999);
