const { Router } = require("express");
const router = Router();
const users = require("../dao/users.js");
router.get("/profile", async (req, res) => {
  const db = await users.init();
  let { id, name, gender, dob } = await db.get(
    req.app.settings.state.currentUserID
  );
  dob = dob.split("-").join("/");
  const age = Math.floor(
    (Date.now() - Date.parse(dob)) / (1000 * 60 * 60 * 24 * 365)
  );
  res.render("profile", { id, name, gender, dob, age, loggedIn: req.app.settings.state.loggedIn });
});
module.exports = router;
