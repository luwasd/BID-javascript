let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? `Cannot afford! You are $${itemPrice - accountBalance} short`
        : "Can afford";
};

console.log(canAfford(1001, 1000));

let myBankAccountBalance = 1000;
const drone = 1001;
let droneOnSale = drone - drone * 0.05;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

const myVar = 10 < 20
    ? 50 < 10
        ? true
        : false
    : false

console.log(myVar);

