const express = require("express");
const router = express.Router();
let user = require("../mocks/userMock");

router.get("/", (req, res) => {
  res.send(user);
});

router.get("/:id", (req, res) => {
  let id = req.params.id - 1;
  console.log(id);
  if (user[id]) {
    res.send(user[id]);
  } else {
    res.status(400).send({ msg: "Data not found! " });
  }
});

router.post("/", (req, res) => {
  let newData = {
    name: req.body.name,
    age: req.body.age,
  };
  user.push(newData);
  res.send(user);
});

router.put("/:id", (req, res) => {
  let id = req.params.id - 1;
  if (user[id]) {
    user[id].name = req.body.name;
    user[id].age = req.body.age;
    res.send(user);
  } else {
    res.status(400).send({ msg: "Data not found! " });
  }
});
router.delete("/:id", (req, res) => {
  let id = req.params.id - 1;
  if (user[id]) {
    user = user.filter((item) => item != user[id]);
    res.send(user);
  } else {
    res.status(400).send({ msg: "Data not found! " });
  }
});

module.exports = router;