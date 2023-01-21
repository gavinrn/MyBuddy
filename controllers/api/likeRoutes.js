const router = require("express").Router();
const { Like } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE LIKE

router.post("/", withAuth, async (req, res) => {
  try {
    const newLike = await Like.create({
      // req.body should have "post_id" or "comment_id"
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLike
);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE LIKE

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const likeData = await Like.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!likeData) {
      res.status(404).json({ message: "No like found with this id!" });
      return;
    }

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL LIKES (not useful outside of context of post/comment/user?)
// GET ALL LIKES FOR USER, IN CONTEXT OF POSTS/COMMENTS (this would be in user profile route?)
// GET LIKES FOR ALL USERS BY POST_ID (should be in homeroutes? this would be for getting likes for posts to display on page along with the post)
// GET LIKES FOR ALL USERS BY COMMENT_ID (should be in homeroutes? this would be for getting likes for comments to display on page along with the comments)

module.exports = router;
