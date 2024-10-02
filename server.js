const express = require("express");
const app = express();

app.use("/assets", express.static(__dirname + "/public/assets"));

app.listen(3000, () => {
  console.log("Server is running on port 3001");
});
