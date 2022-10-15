const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const app = express();
const PORT = 8080;

const loginRouter = require("./routes/user/login.js");
const createRouter = require("./routes/user/create.js");
const getInfoRouter = require("./routes/user/getInfo.js");
const checkIfUserExists = require("./middleware/checkIfUserExists.js");
const autenticateToken = require("./middleware/authenticateToken");

app.use(express.json());
// app.use(cookieParser());
app.use("/create", checkIfUserExists);
app.use("/getInfo", autenticateToken);

app.use("/login", loginRouter);
app.use("/create", createRouter);
app.use("/getInfo", getInfoRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on port: ${PORT}`);
});
