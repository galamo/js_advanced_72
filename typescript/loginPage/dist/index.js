var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ApiUrls;
(function (ApiUrls) {
    ApiUrls["BASE_URL"] = "http://localhost:3200";
    ApiUrls["LOGIN_URL"] = "login";
})(ApiUrls || (ApiUrls = {}));
// class Payload
function init() {
    document.querySelector("#loginAction").addEventListener("click", moreActions);
}
init();
function moreActions() {
    loginAction();
    console.log("More Action Ended");
}
function loginAction() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Login Action started");
        const payload = _getPayload();
        const fetchOptions = _getFetchOptions(payload);
        try {
            console.log("Before fetch");
            const result = yield fetch(`${ApiUrls.BASE_URL}/${ApiUrls.LOGIN_URL}`, fetchOptions);
            const jsonResult = yield result.json();
            if (jsonResult.message === "Login success") {
                popUpModal("alertModalSuccess");
                redirectToFruitsApp();
            }
            console.log("after fetch");
            return true;
        }
        catch (ex) {
            popUpModal("alertModalError");
            console.log(ex);
        }
        console.log("Login Action End");
        function _getFetchOptions(payload) {
            return {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            };
        }
    });
}
function _getPayload() {
    return { userNameEmail: document.querySelector("#userName").nodeValue, password: document.querySelector("#password").nodeValue };
}
function popUpModal(id) {
    // $(`#${id}`).css({ visibility: "visible" })
    // setTimeout(function () {
    //     $(`#${id}`).css({ visibility: "hidden" })
    // }, 5000);
}
function redirectToFruitsApp() {
    setTimeout(() => {
        redirect("file:///C:/Users/Jbt/Desktop/js_advanced_72/fruitsClient/index.html");
    }, 1000);
}
function redirect(url) {
    window.location.href = url;
}
