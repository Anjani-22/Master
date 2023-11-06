/*const d = new Date();
let day = d.getDay();*/

import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

const _dirname = dirname(fileURLToPath(import.meta.url));
app.set("view engine", ejs);
app.use(express.urlencoded({ extended: true }));
const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
  res.render("index", { dateNo: day });
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
