const router = require("express").Router();
const { User, Post, Comment, Like } = require("../models");
const withAuth = require("../utils/auth");

// RENDER HOMEPAGE with Post and Comment data (withAuth to redirect to "/login")
router.get("/", withAuth, async (req, res) => {
  try {
    // --- POST DATA ---
    // Get posts and comments with user data
    // const postData = await Post.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["name"],
    //     },
    //     {
    //       model: Comment,
    //       include: { User },
    //     },
    //   ],
    // });

    // Serialize post data so template can read it
    // const posts = postData.map((post) => post.get({ plain: true }));

    // -- COMMENT DATA --
    // Get post comment data and join user data
    // const commentData = await Comment.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["name"],
    //     },
    //   ],
    // });
    // // Serialize comment data so template can read it
    // const comments = commentData.map((comment) => comment.get({ plain: true }));
    // console.log(comments);


    // console.log(posts);
    
    // -- RENDER HOMEPAGE --
    // Pass serialized data and session flag into template and render Homepage
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN ROUTE (if user logged in, redirect to home "/")
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// USER PROFILE ROUTE
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // include Post data for that user
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    // Render profile page with user data
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST ROUTE for specific post id

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    // Serialize post data so template can read it
    const post = postData.get({ plain: true });

    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// MODULE EXPORT
module.exports = router;
