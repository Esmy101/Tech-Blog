const router = require("express").Router();

// GET all post for homepage
router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
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
    res.render("dashboard");
  } else {
    res.render("login");
  }
});

router.get("/addpost", (req, res) => {
  res.render("addpost");
});

module.exports = router;
