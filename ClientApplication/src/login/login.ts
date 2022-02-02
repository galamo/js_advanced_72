


const _API_URL = "http://localhost:3200"

function initFn() {

    $("#login").on("click", async () => {
        const password = ($("#password").val() as string);
        const userName = ($("#userName").val() as string)
        try {
            await loginService({ userName, password })
            sweetAlert("Login Success")
            setTimeout(() => {
                window.location.href = "file:///Users/galamouy/lectures/72/js_advanced_72/ClientApplication/src/products/products.html"
            }, 3000);
        } catch (ex) {
            sweetAlert("Something Went Wrong")
        }
    })
}

async function loginService(payload: IPayload) {
    const url = `${_API_URL}/login`
    const result = await fetch(url, _getOptions(payload))
    const jsonResult = await result.json();
    return jsonResult;
}
function sweetAlert(message: string) {
    //@ts-ignore
    swal(message)
}



initFn();



interface IPayload {
    userName: string,
    password: string
}

function _getOptions(payload: IPayload) {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }
}