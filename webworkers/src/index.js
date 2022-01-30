const worker = new Worker("./worker.js")
function init() {
}
init()

worker.onmessage = function (result) {
    console.log("Main.js Recieve calculation results")
    console.log(result.data)
    document.querySelector("#h1_data").innerText = result.data
}


function calc() {
    console.log("Main.js Sending calculation command")
    worker.postMessage("calc!")
}



