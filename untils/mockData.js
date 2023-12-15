const BookName = [
    "Lermantov 'Бородино'",
    "Pushkin 'Каменный гость'",  
    "'Nineteen Eighty-Four' by George Orwell" ,
    "Bukou 'Мертвым не больно",
    "Lermantov 'Люди и страсти'",
    "Pushkin 'Пир во время чумы'",  
    "Bukou 'В тумане'",
    "Lermantov 'Странный человек'",
    "'JavaScript: The Good Parts' by Douglas Crockford",
    "'Neuromancer' by William Gibson",
    "'Fahrenheit 451' by Ray Bradbury ",
    "George Orwell '1984' ",
    "Lermantov 'Маскарад'",
    "Bukou 'Журавлиный крик'",
    "Pushkin 'Скупой рыцарь'",  
];
const plaseBooks = [
    'Книжный мир',
    'Oz',
    'Ozon',
    'Библиоглобус',
    'Дом книги',
    'Академкнига',
]
const images = [
    'https://s1-goods.ozstatic.by/2000/520/37/1/1037520_0.jpg',
    'https://s5-goods.ozstatic.by/2000/109/796/10/10796109_0.jpg',
    'https://s1-goods.ozstatic.by/2000/281/916/10/10916281_0.jpg',
    'https://s1-goods.ozstatic.by/2000/961/20/101/101020961_0.jpg',
    'https://s4-goods.ozstatic.by/480/827/802/10/10802827_0_Ya_robot_Ayzek_Azimov.jpg',
    'https://s2-goods.ozstatic.by/480/163/192/101/101192163_0_Zvezdniy_desant_Robert_Haynlayn.jpg',
    'https://s2-goods.ozstatic.by/2000/12/17/101/101017012_0.jpg',
    'https://s1-goods.ozstatic.by/2000/471/965/10/10965471_0.jpg',
    'https://s5-goods.ozstatic.by/2000/578/55/101/101055578_0.jpg',
    'https://s3-goods.ozstatic.by/2000/445/912/10/10912445_0.jpg',
    'https://s2-goods.ozstatic.by/2000/903/679/10/10679903_0.jpg',
    'https://s1-goods.ozstatic.by/480/571/28/101/101028571_0_Carstvo_Rreha_Kerri_Maniskalko.jpg',
    'https://s5-goods.ozstatic.by/480/939/136/101/101136939_0_Poteryannie_bogi_Dzherald_Brom.jpg'
]
const currencySymbols = ["$","€","£","₿","₸",'₴',];

const ageBook = []
for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    ageBook.push(randomNumber);
  }

const currencyInfo = [
    {symbol: "$",hexCode: "0024"},
    {symbol: "€",hexCode: "20AC"},
    {symbol: "£",hexCode: "00A3"}, 
    {symbol: "₿",hexCode: "20BF"}, 
    {symbol: "₴",hexCode: "20B4"}, 
    {symbol: "₸",hexCode: "20B8"}, 
];

module.exports = {
    images,
    BookName,
    currencySymbols,
    currencyInfo,
    ageBook,
    plaseBooks,
};