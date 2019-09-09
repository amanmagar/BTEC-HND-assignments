const { Router } = require("express");
const router = Router();

router.get("/logout", (req, res) => {
  req.app.settings.state.loggedIn = false;
  res.redirect("/");
});

module.exports = router;
