var express = require("express");
var clienteRouter = express.Router();

clienteRouter.get("/", function (req, res) {
  res.send("respond with a resource");
});

clienteRouter.get("/nome/:nome", function (req, res) {
  res.send("respond with a resource");
});

clienteRouter.get("/id/:id", function (req, res) {
  res.send("respond with a resource");
});

clienteRouter.post("/", function (req, res) {
  res.send("respond with a resource");
});

module.exports = clienteRouter;
