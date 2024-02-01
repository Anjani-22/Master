const PORT = process.env.PORT ?? 3000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/todos/:userEmail", async (req, res) => {
  // console.log("🍔", req);
  const { userEmail } = req.params;
  //res.send("Hello");
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

//Edit a todo

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;

  const { user_email, title, progress, date } = req.body;

  try {
    const editToDo = pool.query(
      "UPDATE todos SET user_email=$1, title=$2, progress=$3, date=$4 WHERE id=$5; ",
      [user_email, title, progress, date, id]
    );

    res.json(editToDo);
  } catch (error) {
    console.error(error);
  }
});

// Create a new todo

app.post("/todos", (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log("😀", { user_email, title, progress, date });

  const id = uuidv4();
  try {
    const newTodo = pool.query(
      "INSERT INTO todos(id, user_email, title , progress, date) VALUES($1,$2,$3,$4,$5)",
      [id, user_email, title, progress, date]
    );

    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
});

// delete a task

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteToDo = await pool.query("DELETE FROM todos WHERE id=$1", [id]);
    res.json(deleteToDo);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
