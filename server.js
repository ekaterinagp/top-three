const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const config = require("config");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 9090;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//setup database

const { Model } = require("objection");
const Knex = require("knex"); //library
const knexfile = require("./knexfile.js"); //file contains credentials

// Initialize knex.
const knex = Knex(knexfile.development);

// Give the knex instance to objection.
Model.knex(knex);

//end database

const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 4, // limit each IP to 4 requests per windowMs
});
const usersRouter = require("./routes/api/users");
// app.use(usersRouter, authLimiter);
// app.use("/users/register", authLimiter);
// app.use("/user", require("./routes/api/users"));

const itemsRouter = require("./routes/api/items");
const sendMailRouter = require("./routes/api/sendMail");
const commentsRouter = require("./routes/api/comments");
app.use(usersRouter, authLimiter);
app.use(itemsRouter);
app.use(commentsRouter);
app.use(sendMailRouter);

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error running express", error);
  }
  console.log("The server is running on port", server.address().port);
});
