


const API_URL = "http://localhost:3200"

function init() {

    $("#signup").on("click", async () => {
        const password = ($("#password").val() as string);
        const userName = ($("#userName").val() as string)
        const signupResult = await signupService({ userName, password })
        //@ts-ignore
        swal(signupResult.status)
        setTimeout(() => {
            window.location.href = "file:///Users/galamouy/lectures/72/js_advanced_72/ClientApplication/login.html"
        }, 3000);
    })
}

async function signupService(payload: IPayload) {
    const url = `${API_URL}/signup`
    try {
        const result = await fetch(url, getOptions(payload))
        const jsonResult = await result.json();
        return jsonResult;
    }
    catch (ex) {
        return "Something went wrong"
    }
}



init();



interface IPayload {
    userName: string,
    password: string
}

enum METHODS {
    POST = "POST",
    GET = "GET"
}
function getOptions(payload: IPayload) {
    return {
        method: METHODS.POST,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }
}