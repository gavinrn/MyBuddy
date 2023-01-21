const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE POST

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      // req.body should have "content"
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE POST

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE ONE POST BY ID (this one we should do if we want this functionality)


// GET ALL POSTS (this should be in homeroute?)
// GET ALL POSTS FOR USER (this would be in user profile route?)
// GET ONE POST BY ID (this would be for like a drill in page?)

module.exports = router;
