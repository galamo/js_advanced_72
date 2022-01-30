var worker = new Worker('./worker.js');

worker.onmessage = function (event) {
    alert("Completed " + event.data + "iterations");
};

function sayHello() {
    alert("Hello sir....");
}