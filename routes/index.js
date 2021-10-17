var express = require("express");
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  return res.status(200).json({ message: "Index express" });
});

module.exports = indexRouter;
