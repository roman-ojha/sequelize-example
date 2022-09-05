import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import db from "./config/database.js";

// Test DB
db.authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error" + err);
  });

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
