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
  console.log(req);
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      console.log("404 from BE");
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE ONE POST BY ID
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      // Content of post can be changed by user
      content: req.body.content,
    },
    {
      // Gets a post based on the id and must belong to user requesting update
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// GET ALL POSTS (this should be in homeroute?)
// GET ALL POSTS FOR USER (this would be in user profile route?)
// GET ONE POST BY ID (this would be for like a drill in page?)

module.exports = router;
