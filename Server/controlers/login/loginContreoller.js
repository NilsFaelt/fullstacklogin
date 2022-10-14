const getUser = require("../../utils/getUser");
const login = async (req, res, next) => {
  const user = await getUser(req);
  if (!user.data[0]) {
    res.json({ status: "user dont exists" });
  }
  if (user.data[0] && req.body.password !== user.data[0].password) {
    res.json({ status: "wrong password" });
  } else {
    res.json({ status: "User logged in" });
  }
};

module.exports = login;
