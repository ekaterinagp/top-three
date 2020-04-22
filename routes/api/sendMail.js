const router = require("express").Router();
const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const config = require("config");

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

router.post("/send-email", (req, res) => {
  try {
    // var data = req.body;
    let data = req.body;
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      // host: "smtp.aol.com",
      // port: 465,
      // secure: true,
      // address: "127.0.0.1",
      auth: {
        // type: "OAuth2",
        user: config.get("email"),
        pass: config.get("password"),
      },
    });

    // let transporter = nodemailer.createTransport({
    //   service: "SendPulse", // no need to set host or port etc.
    //   auth: {
    //     user: "account.email@example.com",
    //     pass: "smtp-password",
    //   },
    // });

    // transporter.set("oauth2_provision_cb", (user, renew, callback) => {
    //   let accessToken = userTokens[user];
    //   if (!accessToken) {
    //     return callback(new Error("Unknown user"));
    //   } else {
    //     return callback(null, accessToken);
    //   }
    // });

    let mailOptions = {
      from: data.email,
      to: config.get("email"),
      subject: "Hello bla",
      html: `<p>${data.name}</p>
        <p>${data.email}</p>
        <p>${data.message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send("Success");
      }
      // transporter.close();
    });
  } catch (error) {
    console.log(error);
    res.send({ response: error });
  }
});

// router.post("/send-email", (req, res) => {
//   try {
//     // var data = req.body;
//     let data = req.body;
//     console.log(req.body);
// let transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//       type: 'OAuth2'
//   }
// });

// transporter.set('oauth2_provision_cb', (user, renew, callback) => {
//   let accessToken = userTokens[user];
//   if(!accessToken){
//       return callback(new Error('Unknown user'));
//   }else{
//       return callback(null, accessToken);
//   }
// });

// transporter.sendMail({
//   from: 'sender@example.com',
//   to: 'recipient@example.com',
//   subject: 'Message',
//   text: 'I hope this message gets through!',
//   auth: {
//       user: 'user@example.com'
//   }
// });

module.exports = router;
