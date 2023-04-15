const express = require("express");
const app = express();
app.use(express.json());

let todoCounter = 1;
const todos = [
  {
    id: todoCounter++,
    title: "Todo 1",
  },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  todo.id = todoCounter++;
  todos.push(todo);
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id == id);
  res.json(todo);
});

app.put("/todos/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id == id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    todo.title = req.body.title;
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

app.delete("/todos/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    todos.splice(todos.indexOf(todo), 1);
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
