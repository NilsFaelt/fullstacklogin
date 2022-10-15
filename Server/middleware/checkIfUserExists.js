const axios = require("axios");
const checkIfUserExists = async (req, res, next) => {
  try {
    const user = await axios.get(
      `http://localhost:3000/users?username=${req.body.username}`
    );
    console.log();
    if (user.data[0]) {
      res.json({ message: "user already exitsts" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
  next();
};

module.exports = checkIfUserExists;
