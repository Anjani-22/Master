/*const d = new Date();
let day = d.getDay();*/

import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

// const _dirname = dirname(fileURLToPath(import.meta.url));
// app.set("view engine", ejs);
// app.use(express.urlencoded({ extended: true }));
// const d = new Date();
// let day = d.getDay();

app.get("/", (req, res) => {
  const today = new Date("November 6, 1983 01:15:00");
  let day = today.getDay();
  let dayType = "a weekday";
  let advice = "work hard";
  if (day === 0 || day === 6) {
    console.log(day);
    dayType = "a weekend";
    advice = " so enjoy";
  }

  res.render("index.ejs", { Type: dayType, adv: advice });
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
