const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE COMMENT

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
        // req.body should have "content" and "post_id"
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE COMMENT

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE ONE COMMENT BY ID (this one we should do if we want this functionality)


// GET ALL COMMENTS (this should be in homeroute?)
// GET ALL COMMENTS FOR USER (this would be in user profile route?)
// GET ALL COMMENTS FOR A POST (this would be in a comment page route?)
// GET ONE COMMENT BY ID (this would be for like a drill in page?)

module.exports = router;
