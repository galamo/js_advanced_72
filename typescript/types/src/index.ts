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
