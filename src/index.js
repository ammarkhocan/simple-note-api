require("dotenv").config();
const express = require("express");
const notesRoutes = require("../src/routes/notes.js");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/notes", notesRoutes);

app.use("/", (req, res) => {});

app.listen(4000, () => {
  console.log(`server berhasil berjalan di port ${PORT}`);
});
