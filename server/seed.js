import Database from "better-sqlite3";

//create or read database file

const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    message TEXT
  )
`);
