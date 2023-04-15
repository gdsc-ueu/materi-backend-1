const express = require("express");
const app = express();

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: `User ${id}`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
