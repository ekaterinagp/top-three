const express = require("express");
const app = express();

const port = process.env.PORT || 9090;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error running express", error);
  }
  console.log("The server is running on port", server.address().port);
});
