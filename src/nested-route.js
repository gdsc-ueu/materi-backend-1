const express = require("express");
const app = express();

app.get("/users/a", (req, res) => {
  res.json({
    message: "User a",
  });
});

app.get("/users/b", (req, res) => {
  res.json({
    message: "User b",
  });
});

app.get("/users/c", (req, res) => {
  res.json({
    message: "User c",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
