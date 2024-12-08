const express = require("express");

const useController = require("../controller/notes.js");

const route = express.Router();

// GET
route.get("/", useController.getAllNotes);
route.get("/:idNote", useController.getNoteById);

// POST
route.post("/", useController.createNewNotes);

// UPDATE
route.patch("/:idNote", useController.updateNotes);

// DELETE
route.delete("/:idNote", useController.deleteNotes);

module.exports = route;
