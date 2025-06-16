const express = require("express");
const app = express();
const port = 4000;
const users = require("./MOCK_DATA.json");
const fs = require("fs");


// plugins middleware
app.use(express.urlencoded({ extended: false }));

// only name fetch 
app.get("/user/name", (req, res) => {
  const html = `<ul> ${users
    .map((user) => `<li>${user.first_name}</li>`)
    .join("")} </ul>`;
  res.send(html);
});


//  find id and fetchg respect to this id of url 
app.route('/api/user/:id').get((req,res) => {
const id = Number(req.params.id);
const user = users.find((user)=> user.id == id);
return res.json(user);
})



// full date fetch =====================
app.get("/api/user", (req, res) => {
  res.json(users);
});

// add data ====================
app.post("/api/user", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", id: users.length });
  });
});


app.listen(port, () => {
  console.log(`Server Creted successfully ${port}`);
});
