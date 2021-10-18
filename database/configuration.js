const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
MongoClient.connect(
  `mongodb://${process.env.MONGODBPATH}:${process.env.MONGODBPORT}`
).then((conn) => {
  console.log("Connected to MongoDB");
  global.conn = conn.db(process.env.MONGODATABASE);
});
