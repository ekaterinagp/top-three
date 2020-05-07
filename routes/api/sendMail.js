const router = require("express").Router();
const nodemailer = require("nodemailer");

const config = require("config");

router.post("/send-email", (req, res) => {
  try {
    let data = req.body;
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: config.get("email"),
        pass: config.get("password"),
      },
    });

    let mailOptions = {
      from: data.email,
      to: config.get("email"),
      subject: "Hello you",
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
    });
  } catch (error) {
    console.log(error);
    res.send({ response: error });
  }
});

module.exports = router;
