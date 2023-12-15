const { getRandomBookName, getRandomInt } = require("../untils/random");

const books = Array.from({ length: getRandomInt(13, 47) }, () => ({
    name: getRandomBookName(),
    price: getRandomInt(100, 700),
}));

module.exports = {
    books,
};