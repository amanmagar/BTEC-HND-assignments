const { Router } = require("express");
const router = Router();
const db = require("../dao/appointments.js");
router.post("/add_appointment", async (req, res) => {
  const appointments = await db.init();
  const id = await Promise.resolve(Math.floor(Math.random() * 100000));
  const { doctor, date } = req.body;
  appointments.add(id, req.app.settings.state.currentUserID, doctor.split(":")[0], date);
  appointments.close();
  res.redirect("/appointments");
});
module.exports = router;
