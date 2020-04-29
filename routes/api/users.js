const router = require("express").Router();
const config = require("config");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const jwSecret = config.get("jwtSecret");
// const User = require("../models/User");
const User = require("../../models/User");

//@route GET all users
router.get("/", async (req, res) => {
  const users = await User.query().select();
  return res.status(200).send({ response: users });
});

//@route POST register user

router.post("/register", (req, res) => {
  const { email, password, repeatPassword, firstName, lastName } = req.body;
  console.log(req.body);
  if (
    email &&
    password &&
    repeatPassword &&
    firstName &&
    lastName &&
    password === repeatPassword
  ) {
    if (password.length < 8) {
      return res
        .status(400)
        .send({ response: "Password does not fulfill the requirements" });
    } else {
      bcrypt.hash(password, saltRounds, async (error, hashedPassword) => {
        if (error) {
          return res.status(500).send({ message: "error hashing password" });
        }
        try {
          const existingUser = await User.query()
            .select()
            .where({ email: email })
            .limit(1);

          if (existingUser[0]) {
            return res.status(404).send({ response: "User already exists" });
          } else {
            const newUser = await User.query().insert({
              first_name: firstName,
              last_name: lastName,
              email,
              password: hashedPassword,
            });

            return res.status(200).send({ email: newUser.email });
          }
        } catch (error) {
          return res.status(500).send({ response: error.message });
        }
      });
    }
  } else if (password !== repeatPassword) {
    return res
      .status(404)
      .send({ response: "Password and repeated password are not the same" });
  } else {
    return res.status(404).send({ response: "Missing fields" });
  }
});

//@route POST login of a user
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const users = await User.query().select().where({ email: email }).limit(1);
    const user = users[0];

    if (!user) {
      return res.status(404).send({ response: "User does not exist" });
    }

    if (email && password) {
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch)
          return res.status(400).json({ message: "invalid credentials" });
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;
            res.json({
              token: token,
              user: {
                id: user.id,
                email: user.email,
              },
            });
          }
        );
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.query().select().where({ id: id });
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.delete("/delete", auth, async (req, res) => {
//   try {
//     console.log(req.body);
//     // const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    console.log(token);
    if (!token) return res.json(false);

    const verified = jwt.verify(token, jwSecret);
    console.log(verified.id);
    if (!verified) return res.json(false);

    const user = await User.query().select().where({ id: verified.id });
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// router.get("/auth", auth, async (req, res) => {
//   const { email } = req.body;
//   console.log(req.body);
//   const user = await User.query().select().where({ email: email }).limit(1);
//   console.log(user);
//   return res.send(user);
// });

module.exports = router;
