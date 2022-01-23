const a = 1;
console.log(a);
let user = "galamouyal";
console.log(user);
function setUser(_user) {
    if (typeof _user !== 'string')
        return;
    user = _user;
}
setUser("navaNagar");
function printUser(user) {
    console.log(`the user name is ${user}`);
}
printUser("Shay!!!!");
printUser("Shay!!!!");
