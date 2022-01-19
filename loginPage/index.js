

const ApiBaseUrl = `http://localhost:3200`;


$(document).ready(init)

function init() {
    $("#loginAction").on("click", moreActions)
}

function moreActions() {
    console.log("More Action started")
    // Promise.all([loginAction,loginAction]).then().catch()
    loginAction();
    console.log("More Action Ended")

}
async function loginAction() {
    console.log("Login Action started")
    const loginUrl = "login"
    const payload = _getPayload()
    const fetchOptions = _getFetchOptions(payload)
    try {
        console.log("Before fetch")
        const result = await fetch(`${ApiBaseUrl}/${loginUrl}`, fetchOptions)
        const jsonResult = await result.json();
        if (jsonResult.message === "Login success") popUpModal("alertModalSuccess")
        console.log("after fetch")
    } catch (ex) {
        popUpModal("alertModalError")
        console.log(ex)
    }
    console.log("Login Action End")

    function _getFetchOptions(payload) {
        return {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }
    }
}

function _getPayload() {
    return { userName: $("#userName").val(), password: $("#password").val() }
}
function popUpModal(id) {
    $(`#${id}`).css({ visibility: "visible" })
    setTimeout(function () {
        $(`#${id}`).css({ visibility: "hidden" })
    }, 5000);
}


