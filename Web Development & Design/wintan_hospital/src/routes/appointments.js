const { Router } = require("express");
const router = Router();
const sqlite = require("sqlite");
router.get("/appointments", async (req, res) => {
  const db = await sqlite.open("./db.sqlite");
  const appointments = await db.all(
    `SELECT appointments.id, appointments.user_id, appointments.date, doctors.name, doctors.field FROM appointments INNER JOIN doctors ON appointments.doctor_id=doctors.doctor_id WHERE appointments.user_id=${req.app.settings.state.currentUserID}`
  );
  res.render("appointments", { appointments, loggedIn: req.app.settings.state.loggedIn });
});

module.exports = router;
