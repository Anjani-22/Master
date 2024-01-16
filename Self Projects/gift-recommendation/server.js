const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/gift_rec", (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log("Running on port " + PORT));
