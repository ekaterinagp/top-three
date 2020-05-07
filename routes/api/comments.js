const router = require("express").Router();
const config = require("config");
const auth = require("../../middleware/auth");

const Comments = require("../../models/Comment");

//route get comments with user's data
router.get("/comments", async (req, res) => {
  const comments = await Comments.query().withGraphFetched("users");

  return res.status(200).send({ response: comments });
});

//router add comment
router.post("/:id/comment/list/:listID/", async (req, res) => {
  const id = req.params.id;
  const listID = req.params.listID;
  const { text } = req.body;
  console.log(req.body);
  if (text.length) {
    try {
      const newComment = await Comments.query().insert({
        text: text,
        user_id: id,
        items_id: listID,
      });
      return res.status(200).send(newComment);
    } catch (error) {
      return res.status(500).send({ response: error.message });
    }
  } else {
    return res.status(400).send({
      response: "Comment should be more than 3 charcaters",
    });
  }
});

module.exports = router;
