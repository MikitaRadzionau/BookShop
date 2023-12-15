const http = require("http");
const router = require('./rout/in')

webApp = http.createServer(router);
const port = 9000;
webApp.listen(port, function() {
    console.log(`Стартуем на порту:${port}`);
});