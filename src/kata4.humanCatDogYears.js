const humanCatDogYears = number => {
    if ((typeof number) != "number") {
        return "Error: invalid input";
    }
    let catYears;
    let dogYears;
    if (number >= 1) {
        catYears = 15;
        dogYears = 15;
    }
    if (number >= 2) {
        catYears += 9;
        dogYears += 9;
    }
    if (number >= 3) {
        catYears += (number - 2) * 4;
        dogYears += (number - 2) * 5;
    }
    return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
