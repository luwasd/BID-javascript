Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) { // ahora la variable i solo llega a la raiz cuadrada y al no ser divisible es numero primo
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

const start2 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e5) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start2} milliseconds to run`);

const start3 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e6) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start3} milliseconds to run`);

console.log("-----------------------------------------");