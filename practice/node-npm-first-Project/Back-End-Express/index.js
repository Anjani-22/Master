const express = require("express");
const app = express();
const port = 3000;
const db = require("./DB-Folder/db_connection");

const quoteArr = require("./DB-Folder/quote.json");
app.get("/", function (req, res) {
  if (Object.keys(req.index).length === 0) {
    res.send(quoteArr.length);
  } else {
    res.json({ message: "Query parameters present" });
  }
  let index = req.index;
  let quote = quoteArr[index];
  res.send("quote");
});

app.post("/", function (req, res) {
  const quote = req.body;

  quoteArr.push({ quote: quote });
});

app.get("/all-quotes", function (req, res) {
  res.send(quoteArr);
});

//DB Connection
app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`);
});
