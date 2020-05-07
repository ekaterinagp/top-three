const router = require("express").Router();
const Items = require("../../models/Items");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

//route GET all lists with all user's data+comments
router.get("/list", async (req, res) => {
  const items = await Items.query()
    .withGraphFetched("users")
    .withGraphFetched("comments");
  return res.status(200).send({ response: items });
});

//route GET list by id + user's name+comments with names
router.get("/list/:id", async (req, res) => {
  const listID = req.params.id;
  let list = await Items.query()
    .where({ id: listID })
    .withGraphFetched("users")
    .withGraphFetched("comments.[users]");
  return res.status(200).send({ response: list });
});

router.post("/:id/list/add", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { title, item_1, item_2, item_3 } = req.body;
  console.log(req.body);
  if (title && item_1 && item_2 && item_3) {
    console.log("all fields there");
    if (
      title.length < 4 ||
      item_1.length < 2 ||
      item_2.length < 2 ||
      item_3.length < 2
    ) {
      return res.status(400).send({
        response: "Title should be min 4 char, items min 2 char",
      });
    } else {
      try {
        console.log("we are in a try");
        const newList = await Items.query().insert({
          title: title,
          item_1: item_1,

          item_2: item_2,

          item_3: item_3,

          user_id: id,
        });
        return res.status(200).send({ title: newList.title });
      } catch (error) {
        return res.status(500).send({ response: error.message });
      }
    }
  } else {
    return res
      .status(500)
      .send({ response: "Fields are not filled correctly" });
  }
});

module.exports = router;
