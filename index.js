"use strict";
const app = require("express")();
const mysql = require("mysql");
// require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || "3306",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASS || "secret",
  database: process.env.MYSQL_DB || "test",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected with id: " + connection.threadId);
});

app.listen(3000, () => console.log("Server is running"));

app.get("/", (req, res) => res.send("It works !!!"));
