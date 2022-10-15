const jwt = require("jsonwebtoken");
const autenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ token: "false", message: "token dont exsits" });
  } else {
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return res.status(403).json({ token: "not valid" });
      req.body = user;
      next();
    });
  }
};

module.exports = autenticateToken;
