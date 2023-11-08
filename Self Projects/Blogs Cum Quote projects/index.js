app.get("/", (req, res) => {
  const q = quote[randomIndex];
  res.render("index.ejs");
});

app.get("/edit", (req, res) => {
  const blogReq = req.body.q;
  res.render("input.ejs", { blog: bolgReq });
});

app.post("/view", (req, res) => {
  const q = req.body.newquote;
  quoteArr.push(q);
  res.render("view.ejs", { newquote: q });
});
