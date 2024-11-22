const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

require("./db/connection")
  .then(() => {
    app.listen(PORT, () => {
      console.log("serevr is started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
