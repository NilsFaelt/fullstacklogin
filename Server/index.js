const express = require("express");
const app = express();
const PORT = 8080;

const loginRouter = require("./routes/user/login.js");
const createRouter = require("./routes/user/create.js");
const checkIfUserExists = require("./utils/checkIfUserExists.js");

app.use(express.json());
app.use("/create", checkIfUserExists);

app.use("/login", loginRouter);
app.use("/create", createRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on port: ${PORT}`);
});
