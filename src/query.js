const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.json({
    message: `Hello, my name is ${name}, I'm ${age} years old`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
