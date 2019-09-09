const sqlite = require("sqlite");

class DoctorsDAO {
  constructor() {
    this.open = false;
    this.db = null;
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
  async getAll() {
    const doctors = await this.db.all(`SELECT * FROM doctors`);
    return doctors;
  }

  async get(id) {
      const doctor = await this.db.get(`SELECT * FROM doctors WHERE id=${id}`);
      return doctor;
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

module.exports = new DoctorsDAO();
