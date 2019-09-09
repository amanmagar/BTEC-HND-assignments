const sqlite = require("sqlite");

class UsersDAO {
  constructor() {
    this.db = null;
    this.open = false;
  }

  async init() {
    try {
      this.open = true;
      this.db = await sqlite.open("./db.sqlite");
      return this;
    } catch (e) {
      this.open = false;
      e.message = "Database can not be opened!";
      throw e;
    }
  }

  async add(id, name, gender, dob, password) {
    await this.db.run("INSERT INTO users (id, name, gender, dob, password) VALUES (?, ?, ?, ?, ?)", [
      id,
      name,
      gender,
      dob,
      password
    ]);
  }
  
  async get(id) {
   const user = await this.db.get(`SELECT * FROM users WHERE id=${id}`);
   return user;
  }

  close() {
    if (this.open) {
      this.open = false;
      this.db.close();
      this.db = null;
      return true;
    }
    return false;
  }

  get isOpen() {
    return this.open;
  }
}
module.exports = new UsersDAO();