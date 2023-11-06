//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    res.sendFile(_dirname + "/public/secret.html");
  } else {
    res.sendFile(_dirname + "/public/index.html");
  }
});
app.listen(port, () => console.log(`listening on port ${port}`));
