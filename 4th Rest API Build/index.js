const express = require("express");
const app = express();
const port = 4000;
const users = require("./MOCK_DATA.json");

// only web
app.get("/user", (req, res) => {
  const html = `<ul> ${users
    .map((user) => `<li>${user.first_name}</li>`)
    .join("")} </ul>`;
  res.send(html);
});

// only qpp
app.get("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  return res.json(user);
});

app.listen(port, () => {
  console.log(`Server Creted successfully ${port}`);
});
