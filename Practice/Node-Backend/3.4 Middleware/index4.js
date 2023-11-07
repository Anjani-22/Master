import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let fullname = "";

app.use(bodyParser.urlencoded({ extended: true })); //express.urlencoded({ extended: true })
app.use(customMiddlware);
function customMiddlware(req, res, next) {
  fullname = req.body["street"] + req.body["pet"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h2>your fullname is </h2><h1></>${fullname}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
