const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const config = require("config");
const path = require("path");
const nodemailer = require("nodemailer");

// const createProxyMiddleware = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://localhost:9090",
//       changeOrigin: true,
//     })
//   );
// };

const app = express();
const port = process.env.PORT || 9090;

//Static folder
// app.use(
//   "./client/public",
//   express.static(path.join(__dirname, "client", "public"))
// );

// if (process.env.NODE_ENV === "production") {
//   //Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

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

app.use("/users/login", authLimiter);
app.use("/users/register", authLimiter);

const usersRouter = require("./routes/api/users");
const itemsRouter = require("./routes/api/items");
const sendMailRouter = require("./routes/api/sendMail");
app.use(usersRouter);
app.use(itemsRouter);
app.use(sendMailRouter);

//send Mail

// app.post("/send-email", (req, res) => {
//   var data = req.body;
//   console.log(req.body);
//   var smtpTransport = nodemailer.createTransport({
//     service: "Gmail",
//     port: 465,
//     auth: {
//       user: config.get("email"),
//       pass: config.get("password"),
//     },
//   });

//   var mailOptions = {
//     from: data.email,
//     to: "ENTER_YOUR_EMAIL",
//     subject: "ENTER_YOUR_SUBJECT",
//     html: `<p>${data.name}</p>
//           <p>${data.email}</p>
//           <p>${data.message}</p>`,
//   };

//   smtpTransport.sendMail(mailOptions, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send("Success");
//     }
//     smtpTransport.close();
//   });
// });

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error running express", error);
  }
  console.log("The server is running on port", server.address().port);
});
