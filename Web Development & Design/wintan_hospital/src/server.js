const express = require("express");
const app = new express();
const PORT = 3000;
const path = require("path");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const fs = require("fs");
const { promisify } = require("util");
const readDir = promisify(fs.readdir);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("state", {
  loggedIn: false,
  currentUserID: "",
  loginError: ""
});
app.use(express.static(path.join(__dirname, "public")));
const useRoutes = async dir => {
  const dirPath = path.join(__dirname, dir);
  const routers = await readDir(dirPath);
  Promise.all(
    routers.map(router => {
      const routes = require(path.join(dirPath, router));
      app.use(routes);
    })
  );
};
useRoutes("./routes");

app.listen(PORT, async () => {
  console.log(`Listening on Port:${PORT}`);
});
