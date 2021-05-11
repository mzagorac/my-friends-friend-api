require("dotenv").config();

module.exports = {
  dev: {
    port: process.env.PORT || 8080,
    basicUrl: process.env.URL || "http://127.0.0.1",
  },
};
