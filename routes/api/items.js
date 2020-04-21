const router = require("express").Router();
const Items = require("../../models/Items");
const User = require("../../models/User");

router.get("/top-three", async (req, res) => {
  const items = await Items.query().select();
  return res.status(200).send({ response: items });
});

router.get("/top-three/:id", async (req, res) => {
  const id = req.params.id;
  let list = await Items.query().select().where({ user_id: id });
  return res.status(200).send({ response: list });
});

module.exports = router;
