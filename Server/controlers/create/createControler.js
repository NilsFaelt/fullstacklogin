const axios = require("axios");

const createUser = async (req, res) => {
  try {
    await axios.post(`http://localhost:3000/users`, {
      username: req.body.username,
      password: req.body.password,
    });
    await axios.post(`http://localhost:3000/usersInfo`, {
      username: req.body.username,
      name: req.body.name,
      age: req.body.age,
    });
    res.send({ status: "sucesss", message: "user created", user: "created" });
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

module.exports = createUser;
