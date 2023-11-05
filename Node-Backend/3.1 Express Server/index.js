import express from "express";

const app = express(); //return obj which has functions get listen...etc and other functionalities to handle req
const port = 3000;

app.listen(port, () => {
  console.log(`Server succesfully running on ${port}`);
});

app.get("/", (req, res) => {
  res.send(` hello user again ${req.rawHeaders}`);
});
app.get("/endpoint1", (req, res) => {
  res.send("<h1>endpoint1</h1>");
});

app.get("/endpoint2", (req, res) => {
  res.send(`<h1>${req.rawHeaders}</h1>`);
  console.log(`reques: ${req}`);
  console.log("\n\n\n");
  console.log(`respons: ${res.json}`);
});
