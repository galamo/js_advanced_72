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
function printEmployee(userName, id, age, jobs) {
    console.log(`${userName} , ${id} , ${age} `);
    jobs.forEach(item => console.log(item));
}
printEmployee("nava", "112124", 22, ["soldier", "wedding_lover"]);
var URLS;
(function (URLS) {
    URLS["BaseUrl"] = "http://localhost:3200";
})(URLS || (URLS = {}));
function getUserAge() {
    if (!user)
        return;
    return "Str";
}
