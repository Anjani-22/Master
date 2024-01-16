const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;
app.get("/gift_rec", (req, res) => res.send("<h1>HEllo learner<h1/>"));

app.post("/gift_rec", async (req, res) => {
  const prompt = req.body.message;
  const options = {
    method: "POST",
    header: {
      Authentication: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );

    const data = await response.json();
    console.log(data);

    res.send(data.choices[0]);
  } catch (err) {
    console.error("👾 in server " + err);
    res.send(err);
  }
});

app.listen(PORT, () => console.log("Running on port " + PORT));
