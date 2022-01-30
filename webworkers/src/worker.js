console.log("Worker is up")

onmessage = function (messageEvent) {
    console.log("Worker recieved calculation command")
    const result = calc()
    console.log("Worker Sending back calculation result")
    postMessage(result)
}

function calc() {
    let num = 1
    for (let index = 1; index < 9999999990; index++) {
        num = num + index
    }
    return num
}