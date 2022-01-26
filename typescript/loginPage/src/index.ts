

enum ApiUrls {
    BASE_URL = "http://localhost:3200",
    LOGIN_URL = "login"
}

function init() {
    document.querySelector("#loginAction").addEventListener("click", moreActions)
}
init()

function moreActions(): void {
    loginAction();
    console.log("More Action Ended")
}

async function loginAction() {
    console.log("Login Action started")
    const payload = _getPayload()
    const fetchOptions = _getFetchOptions(payload)
    try {
        console.log("Before fetch")
        const result: Response = await fetch(`${ApiUrls.BASE_URL}/${ApiUrls.LOGIN_URL}`, fetchOptions)
        const jsonResult: { message: string } = await result.json();
        if (jsonResult.message === "Login success") {
            popUpModal("alertModalSuccess")
            redirectToFruitsApp()
        }
        console.log("after fetch")
        return true;
    } catch (ex) {
        popUpModal("alertModalError")
        console.log(ex)
    }
    console.log("Login Action End")

    function _getFetchOptions(payload: { userName: string, password: string }): {
        method: string, headers:
        { [key: string]: string }, body: string
    } {
        return {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }
    }
}
function _getPayload(): { userName: string, password: string } {
    return { userName: document.querySelector("#userName").nodeValue, password: document.querySelector("#password").nodeValue }
}
function popUpModal(id: string): void {
    // $(`#${id}`).css({ visibility: "visible" })
    // setTimeout(function () {
    //     $(`#${id}`).css({ visibility: "hidden" })
    // }, 5000);
}


function redirectToFruitsApp() {
    setTimeout(() => {
        window.location.href = "file:///C:/Users/Jbt/Desktop/js_advanced_72/fruitsClient/index.html"
    }, 1000);
}