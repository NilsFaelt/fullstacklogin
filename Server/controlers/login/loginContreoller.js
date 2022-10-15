const getUser = require("../../utils/getUser");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const user = await getUser(req);
    if (!user.data[0]) {
      res.json({ status: "user dont exists" });
    }
    if (user.data[0] && req.body.password !== user.data[0].password) {
      res.json({ status: "wrong password" });
    } else {
      const jwtToken = jwt.sign(
        {
          user: req.body.username,
        },
        process.env.JWT
      );
      res.json({ token: jwtToken });
    }
  } catch (error) {
    console.log(`Something went wring in login: error ${error}`);
  }
};

// .cookie("acess_token", token, { httpOnly: true })
// .status(200)
// .json({ token: "generated" });

module.exports = login;
