const {
    BookName,
    currencySymbols,
    currencyInfo,
    ageBook,
    plaseBooks,
    images,
} = require("./mockData");

function getRandomElementFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    } else {
        return null;
    }
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
function getRandomPlace(){
    return getRandomElementFromArray(plaseBooks);
}
function getRandomLink(){
    return getRandomElementFromArray(images);
}
function getRandomBookName() {
    return getRandomElementFromArray(BookName);
}
function getRandomAge(){
    return getRandomElementFromArray(ageBook);
}
function getRandomCurrencySymbol() {
    return currencySymbols[getRandomInt(0, currencySymbols.length - 1)];
}

function getRandomCurrencyObj() {
    return currencyInfo[getRandomInt(0, currencySymbols.length - 1)];
}


module.exports = {
    getRandomElementFromArray,
    getRandomInt,
    getRandomAge,
    getRandomLink,
    getRandomBookName,
    getRandomCurrencySymbol,
    getRandomCurrencyObj,
    getRandomPlace,
};