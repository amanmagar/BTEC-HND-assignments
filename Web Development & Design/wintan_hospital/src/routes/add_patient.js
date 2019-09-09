const { Router } = require('express');
const router = Router();
const db = require("../dao/users.js");
router.post("/add_patient", async (req, res) => {
    const { nic, name, gender, dob, password} = req.body;
    const users = await db.init();
    await users.add(nic, name, gender, dob, password)
    users.close();
    req.app.settings.state.loggedIn = true;
    req.app.settings.state.currentUserID = nic;
    res.redirect("/")
});

module.exports = router;