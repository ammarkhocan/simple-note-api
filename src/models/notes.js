const dbPool = require("../config/database.js"); // Path sesuai struktur folder Anda

const getAllNotes = async () => {
  const SQLQuery = "SELECT * FROM notes";
  return dbPool.execute(SQLQuery);
};

const createNotes = (body) => {
  const SQLQuery = `INSERT INTO notes (title, datetime, note) VALUES ('${body.title}', '${body.datetime}', '${body.note}')`;
  return dbPool.execute(SQLQuery);
};

const updateNotes = (body, idNote) => {
  const SQLQuery = `UPDATE notes SET title = '${body.title}', datetime = '${body.datetime}', note = '${body.note}' WHERE id = ${idNote}`;
  return dbPool.execute(SQLQuery);
};

const deleteNotes = (idNote) => {
  const SQLQuery = `DELETE FROM notes WHERE id =${idNote}`;
  return dbPool.execute(SQLQuery);
};

const getNoteById = (idNote) => {
  const SQLQuery = `SELECT * FROM notes WHERE id = ?`;
  return dbPool.execute(SQLQuery, [idNote]);
};

module.exports = {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
  getNoteById,
};
