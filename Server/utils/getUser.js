const axios = require("axios");

const getUser = async (req, res) => {
  try {
    const user = await axios.get(
      `http://localhost:3000/users?username=${req.body.username}`
    );
    return user;
  } catch (err) {
    console.log(`Something went wrong in get user: err:${err}`);
  }
};

module.exports = getUser;
