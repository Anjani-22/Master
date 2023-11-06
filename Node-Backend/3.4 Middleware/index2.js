import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  console.log("Before Sending" + req.method);
  //res.send("Hello");

  res.status(200); //else picks up default status 200
  console.log("After Sending res");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
