const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
MongoClient.connect(process.env.DATABASE_URL).then((conn) => {
  console.log("Connected to MongoDB");
  global.conn = conn.db(process.env.MONGODATABASE);
});
