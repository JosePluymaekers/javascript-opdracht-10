
const checkAge = function (number) {
    console.log("entering checkAge...");
    if (number > 18) {
        return true;
    } else {
        return false;
    }
};


const sayHello = function (number) {
    console.log("entering say hello...");
    let Adult = checkAge(number);
    if (Adult == true) {
        return "he adult";
    } if (Adult == false) {
        return "hi kiddo";
    }
};
console.log(sayHello(10));

/* 
const addVat = function (priceWithoutVat) {
    console.log("entering addVat");
    return priceWithoutVat * 0.21;
};

const calculateTotalPrice = function (priceWithoutVat) {
    console.log("entering calculateTotalPrice");
    let totalPrice = addVat(priceWithoutVat) + priceWithoutVat;
    return totalPrice;
};

console.log(calculateTotalPrice(20));


 */


const addVat = function (priceWithoutVat, vatPercentage) {
    console.log("entering addVat...");
    let vatPrice = priceWithoutVat * (vatPercentage / 100);
    return vatPrice;
};

const calculateTotalPrice = function (priceWithoutVat, vatPercentage) {
    console.log("entering calculateTotalPrice");
    let totalPrice = addVat(priceWithoutVat, vatPercentage) + priceWithoutVat;
    return totalPrice;
};

console.log(calculateTotalPrice(100, 21));