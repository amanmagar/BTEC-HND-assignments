const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
  res.render("home", {loggedIn: req.app.settings.state.loggedIn});
})

module.exports = router;