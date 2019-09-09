const { Router } = require("express");
const router = Router();

router.get("/login", (req, res) => {
    res.render("login", {loginError: req.app.settings.state.loginError});
});
module.exports = router;
