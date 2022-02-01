onmessage = function checkPrimes(e) {
    var min = parseInt(e.data.min);
    var max = parseInt(e.data.max);
    for (i = min; i <= max; i++) {
        if (isPrime(i))
            postMessage(i);
    }
}
function isPrime(num) { for (var i = 2; i <= Math.sqrt(num); i++) { if (num % i == 0) return false; } return true; }