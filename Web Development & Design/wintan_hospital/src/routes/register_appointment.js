const { Router } = require("express");
const router = Router();
const dao = require("../dao/doctor");

router.get("/register_appointment", async (req, res) => {
  const db = await dao.init();
  const doctors = await db.getAll();
  const names = doctors.map(d => `${d.doctor_id}:${d.name}`);

  res.render("register_appointment", {
    names,
    loggedIn: req.app.settings.state.loggedIn
  });
});

module.exports = router;
