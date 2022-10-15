const axios = require("axios");

const getUserInfo = async (req, res) => {
  try {
    const userInfo = await axios.get(
      `http://localhost:3000/usersInfo?username=${req.body.user}`
    );
    console.log(userInfo);
    res.send({ user: userInfo.data });
  } catch (err) {
    console.log(`Something went wrong in get user: err:${err}`);
    res.status(400).json({ error: "coudnlt get userinfo" });
  }
};

module.exports = getUserInfo;
