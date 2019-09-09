exports.init = (app, req, res) => {
    app.set("login", false);
    res.redirect("/");
}

exports.cfg = {
    path: "/logout",
    method: "get"
}