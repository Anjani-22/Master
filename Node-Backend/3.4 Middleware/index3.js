import express from "express";

const app = express();
const port = 3000;

app.use(logger);

function logger(req, res, next) {
  console.log(req.method);

  console.log(req.url);

  console.log("res " + res);
  next();
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  res.send("Hello");
  console.log("post");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
