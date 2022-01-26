const a: number = 1;
console.log(a)

let user: string = "galamouyal"
console.log(user)


function setUser(_user: string) {
    if (typeof _user !== 'string') return;
    user = _user
}

setUser("navaNagar")



function printUser(user: string) {
    console.log(`the user name is ${user}`)
}
printUser("Shay!!!!")
printUser("Shay!!!!")


function printEmployee(userName: string, id: string, age: number, jobs: Array<string>) {
    console.log(`${userName} , ${id} , ${age} `)
    jobs.forEach(item => console.log(item))
}
printEmployee("nava", "112124", 22, ["soldier", "wedding_lover"])

enum URLS {
    BaseUrl = "http://localhost:3200",
}

function getUserAge(): string | undefined {
    if (!user) return;
    return "Str"
}

