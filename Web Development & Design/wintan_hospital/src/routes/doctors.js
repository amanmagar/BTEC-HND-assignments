const { Router } = require('express');
const router = Router();
const dao = require("../dao/doctor.js");

router.get("/doctors", async(req, res) => {
    const db = await dao.init();
    const doctors = await db.getAll();
    res.render("doctors", {doctors, loggedIn: req.app.settings.state.loggedIn})
});

module.exports = router;