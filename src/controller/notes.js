const notesModel = require("../models/notes.js");

// contoller GET
const getAllNotes = async (req, res) => {
  try {
    const [data] = await notesModel.getAllNotes();

    res.json({
      message: "GET all Notes",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// controller POST
const createNewNotes = async (req, res) => {
  // console.log(req.body);
  const { body } = req;
  try {
    await notesModel.createNotes(body);
    res.json({
      message: "POST all Notes",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// controller UPDATE
const updateNotes = async (req, res) => {
  const { idNote } = req.params;
  const { body } = req;

  try {
    await notesModel.updateNotes(body, idNote);
    res.status(200).json({
      message: "Note updated successfully",
      data: { id: idNote, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
};

// controller DELETE
const deleteNotes = async (req, res) => {
  const { idNote } = req.params;
  try {
    await notesModel.deleteNotes(idNote);
    res.status(200).json({
      message: "DELETE note successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
};

// GET NOTE by ID
const getNoteById = async (req, res) => {
  const { idNote } = req.params; // Mendapatkan idNote dari parameter URL
  try {
    const [data] = await notesModel.getNoteById(idNote);

    if (data.length === 0) {
      return res.status(404).json({
        message: `Note dengan ID ${idNote} tidak ditemukan`,
      });
    }

    res.status(200).json({
      message: "Note ditemukan",
      data: data[0], // Mengirimkan data catatan pertama (karena kita hanya mencari satu catatan)
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
};

module.exports = {
  getAllNotes,
  createNewNotes,
  updateNotes,
  deleteNotes,
  getNoteById,
};
