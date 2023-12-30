//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Certificate } from "crypto";

const _dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();
let userAuthorise = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(checkPassword); //middleware to check password, for every req/routehandler the middle ware is executed

function checkPassword(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") userAuthorise = true;
  next();
}

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userAuthorise) {
    res.sendFile(_dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});
app.listen(port, () => console.log(`listening on port ${port}`));
