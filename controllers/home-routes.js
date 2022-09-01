const router = require("express").Router();
const { Posts, Comments, User } = require("../models");

// GET all post for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Posts.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
    });
  } else {
    res.render("login");
  }
});

router.get("/addpost", (req, res) => {
  res.render("addpost", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
