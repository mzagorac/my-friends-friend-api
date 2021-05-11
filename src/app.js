const express = require("express");
const router = require("./routes");
const {
  dev: { port },
} = require("./config");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/v1/friends", router);
app.use((err, req, res, next) => {
  res.send({ errorMessage: err });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
