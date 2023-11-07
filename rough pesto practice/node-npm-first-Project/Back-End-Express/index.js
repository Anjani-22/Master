const express = require("express");
const app = express();
const port = 3000;
const db = require("./DB-Folder/db_connection");

const quoteArr = require("./DB-Folder/quote.json");
app.get("/", function (req, res) {
  let index = req.query.index;

  if (!index) {
    let randomIndex = Math.floor(Math.random() * quoteArr.length);
    let q = quoteArr[randomIndex].quote;
    res.send(q);
    //res.render("index.ejs", quoteArr[raandomIndex]);
  }
  if (index < 0 || index > quoteArr.length - 1) {
    res.send(`index not in range , enter index b/w 0 and ${quoteArr.length}`);
  } else {
    let quote = quoteArr[index].quote;
    res.send(quote);
    //res.render("index.ejs", quoteArr[index])
  }
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
