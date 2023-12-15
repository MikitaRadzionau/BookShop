const getRouter = require("./getRouter");

function handler(req, res) {
  switch (req.method) {
    case "GET":
      getRouter(req, res);
      break;
  }
}

module.exports = handler;
