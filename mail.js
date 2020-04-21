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
      user: "ooo12345atkea@gmail.com",
      password: "Bjarne12345",
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

// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "Gmail",
//     port: 9090,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "ooo12345atkea@gmail.com",
//             pass: "Bjarne12345",
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
