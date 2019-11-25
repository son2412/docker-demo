// const { findDocuments } = require("./handle");
const app = require("express")();
// const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

// MongoClient.connect(process.env.DB_URL).then(connection => {
//   console.log(connection);
// });

// MongoClient.connect(process.env.DB_URL, function(err, client) {
//   console.log("Connected successfully to server");

//   const db = client.db(process.env.DB_NAME);
//   findDocuments(db, function() {
//     client.close();
//   });
// });

app.listen(3000, () => console.log("Server is running"));

app.get("/", (req, res) => res.send("It works !!"));
