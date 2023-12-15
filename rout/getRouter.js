const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const {
    books
} = require("../data/books_file");
const {
    contentTypes
} = require("../config/mimeTypes");
const {
    getRandomCurrencyObj,
    getRandomAge,
    getRandomPlace,
    getRandomLink,
} = require("../untils/random");
const BookItemTemplate = fs.readFileSync(
    "./templates/bookItem.html",
    "utf-8"
);
const BookListPageTemplate = fs.readFileSync(
    "./templates/bookListPage.html",
    "utf-8"
);
const currencyObj = getRandomCurrencyObj();

function getRouter(req, res) {
    console.log(`\n\n\nUrl: ${req.url}\n`);
    let parsedUrl = url.parse(req.url, true);
    console.log(`.pathname: ${req.pathname}`);

    switch (parsedUrl.pathname) {
        case "/":
        case"/home":
        case"/index":
        case"/main":
        case"/hom":
            res.writeHead(301, {Location: "/index.html",});
            res.end();
            break;
        case "/books":
            const filteredBooks = books
                .filter((book) => {
                    if (
                        parsedUrl.query.author &&
                        !book.name
                        .toLowerCase()
                        .includes(parsedUrl.query.author.toLowerCase())
                    )return false;
                    if (
                        parsedUrl.query.maxprice &&
                        book.price > parseInt(parsedUrl.query.maxprice)
                    )return false;

                    return true;
                })
                .sort(function(q, w) {
                    return q.price - w.price;
                });
            const renderedData = filteredBooks
                .map((item) =>
                    BookItemTemplate
                    .replace("{{name}}", item.name)
                    .replace("{{price}}",`<span style="color: #${currencyObj.hexCode};">${item.price}${currencyObj.symbol}</span>`)
                    .replace("{{age}}", `${getRandomAge()} - год выпуска`)
                    .replace("{{place}}",getRandomPlace())
                    .replace("{{img}}", getRandomLink())

                )
                .join("");
            const html = BookListPageTemplate
                .replace("{{content}}", renderedData)
                .replace("{{title}}", "title")
                

            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
            });
            res.end(html);
            break;
        default:
            const filePath = path.join("./public", parsedUrl.pathname.substring(1));
            console.log(filePath);

            fs.access(filePath, fs.constants.R_OK, (err) => {
                if (err) {
                    res.writeHead(404, {
                        "Content-Type": "text/html; charset=utf-8",
                    });

                    res.end("<h1>Not found</h1>");
                } else {
                    const extname = path.extname(filePath);
                    const contentType =
                        contentTypes[extname] || "application/octet-stream";

                    res.writeHead(200, {
                        "Content-Type": contentType,
                    });
                    fs.createReadStream(filePath).pipe(res);
                }
            });
    }
};
module.exports = getRouter;





// ----------------------------------------------------------------
                            // myself
// ----------------------------------------------------------------
// fs.access - Проверяет, есть ли у указанного файла или каталога право на чтение.
// fs.createReadStream создаёт readable stream для файла или каталога.
//  Это позволяет читать содержимое файла или все файлы в каталоге.
//   Вы можете использовать его для чтения больших файлов или для получения содержимого каталога