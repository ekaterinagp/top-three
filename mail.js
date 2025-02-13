const mailer = require("nodemailer");
const config = require("config");
const { Hello } = require("./email-templates/hello_template");
const { Thanks } = require("./email-templates/thanks_teplate");

const getEmailData = (to, name, template) => {
  let data = null;

  switch (template) {
    case "hello":
      data = {
        from: "Katya <katya.koriakina@gmail.com>",
        to,
        subject: `Hello ${name}`,
        html: Hello(),
      };
      break;

    case "thanks":
      data = {
        from: "Katya <katya.koriakina@gmail.com>",
        to,
        subject: `Hello ${name}`,
        html: Thanks(),
      };
      break;
    default:
      data;
  }
  return data;
};

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: config.get("email"),
      password: config.get("password"),
    },
  });

  const mail = getEmailData(to, name, type);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
