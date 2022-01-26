class BaseDate {
    public day: number;
    public year: number;
    public month: number
    constructor(_day: number, _year: number, _month: number) {
        this.day = this.validateDay(_day);
        this.month = this.validateMonth(_month);
        this.year = this.validateYear(_year);
    }
    getDate() {
        return `${this.day}-${this.month}-${this.year}`
    }

    validateDay(day: number): number {
        if (day >= 1 && day <= 31) return day;
        throw new Error("Day is not valid")
    }
    validateMonth(month: number): number {
        if (month >= 1 && month <= 12) return month;
        throw new Error("Month is not valid")
    }
    validateYear(year: number): number {
        if (year >= 2022) return year;
        throw new Error("Year is not valid")
    }
}

class FullTime extends BaseDate {
    constructor(baseDate: BaseDate, public hour: number, public min: number, public sec: number) {
        super(baseDate.day, baseDate.year, baseDate.month)
    }
    getFullTime() {
        return `${super.getDate()} ${this.getTime()}`
    }
    getTime() {
        return `${this.hour}:${this.min}:${this.sec}`
    }
}

class Product {
    constructor(public productName: string, public price: number, public fullTime: FullTime) { }
    getProductDetails() {
        return `Product Name: ${this.productName} Price: ${this.price} Exp time: ${this.fullTime.getFullTime()}  `
    }
}

const baseDate = new BaseDate(1, 2022, 2)
const fullTime = new FullTime(baseDate, 5, 22, 22)
const p = new Product("Milk", 5, fullTime)
p.getProductDetails()




class A {
    public foo: string
    constructor(_foo: string) {
        this.foo = _foo
    }
}
class AShort {
    constructor(public foo: string) {
    }
}