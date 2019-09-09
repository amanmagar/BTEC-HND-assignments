const { Router } = require("express");
const router = Router();
const users = require("../dao/users");
router.post("/auth", async(req, res) => {
  const db = await users.init();
  const user = await db.get(req.body.id);
  if(user && user.password === req.body.password) {
    req.app.settings.state.loggedIn = true
    req.app.settings.state.currentUserID = req.body.id;
    res.redirect("/");

  } else {
    req.app.settings.state.loginError = "Incorrect ID or Password!"
    res.redirect("/login");
  }
  users.close();
});

module.exports = router;
