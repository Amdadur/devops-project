const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.json({ message: 'To-do added successfully', todo });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
