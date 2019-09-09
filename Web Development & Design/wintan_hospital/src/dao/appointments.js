const sqlite = require("sqlite");

class AppointmentsDAO {
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

  async add(id, user_id, doctor_id, date) {
    await this.db.run(
      `INSERT INTO appointments (id, user_id, doctor_id, date) VALUES (?, ?, ?, ?)`,
      [id, user_id, doctor_id, date]
    );
  }
  async getAll(id) {
    const appointments = await this.db.all(
      `SELECT * FROM appointments WHERE user_id=${id}`
    );
    return appointments;
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

module.exports = new AppointmentsDAO();
