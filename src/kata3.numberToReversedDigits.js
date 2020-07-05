const numberToReversedDigits = number => {
    if (typeof number !== "number") {
        return "Error: invalid input type";
    }
    return number.toString().split('').map(Number).reverse();
};

module.exports = numberToReversedDigits;
