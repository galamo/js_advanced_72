
interface IUserServer {
    nname: Array<string>,
    username: string
    email: string;
    website: string;
}
class User {
    public name: string;
    public userName: string;
    public email: string;
    public site: string;
    constructor(u: IUserServer) {
        this.name = this.extractName(u.nname)
        this.userName = u.username || this.extractName(u.nname) || "";
        this.email = u.email || "";
        this.site = `https://${u.website}.com` || `https://${u.email}.com`
    }
    extractName(name: Array<string> | string): string {
        if (Array.isArray(name)) return name.join(",")
        return name || ""
    }

    static usersFactory(users: Array<IUserServer>): Array<User> {
        return users.map((u: IUserServer) => {
            return new User(u)
        })
    }
}
async function getUsers(): Promise<Array<IUserServer>> {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await result.json()
    return users;
}
const state = { users: [] }
async function initFn() {
    const users: Array<IUserServer> = await getUsers();
    const modeledUser = User.usersFactory(users)
    state.users = modeledUser
    draw(modeledUser)
}
function draw(arr: Array<User>) {
    for (let index = 0; index < arr.length; index++) {
        const user = arr[index];
        console.log(user.name)
        console.log(user.site)
    }
}


initFn()