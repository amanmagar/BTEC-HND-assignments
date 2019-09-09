



/*
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/auth", (req, res) => {
  
});
app.get("/logout", (req, res) => {
  app.set("login", false);
  res.redirect("/");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/add_patient", async (req, res) => {
  const db = await sqlite.open("./db.sqlite");
  console.log(req.body);
  await db.run(
    "CREATE TABLE patient_details (ID INTEGER, name TEXT PRIMARY KEY, age INTEGER)"
  );
  await db.run(`INSERT INTO patient_details (id, name, age) VALUES (?, ?, ?)`, [
    req.body.id,
    req.body.name,
    req.body.age
  ]);
  db.close();
  app.set("id", req.body.id);
  res.redirect("/patient_details")
});
app.get("/patient_details", async (req, res) => {
  const db = await sqlite.open("./db.sqlite");
  const { name, age } = await db.get(`SELECT * FROM patient_details WHERE id=${app.settings.id}`);
  console.log(name, age);
  res.render("patient_details", { name, age });
  db.close();
});
*/