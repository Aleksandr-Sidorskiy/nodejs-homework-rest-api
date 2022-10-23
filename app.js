// I6ZO0NCYpRo0pO7R 
require("dotenv").config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');
const authRouter = require("./routes/api/auth");

const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { User } = require("./models");

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
// ===============================
const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: multerConfig,
});

const contacts = [];

const contactDir = path.join(__dirname, "public", "avatar");

app.post("/api/contacts", upload.single("avatar"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(contactDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  
  await User.findByIdAndUpdate
});

app.get("/api/contacts", async (req, res) => {
  res.json(contacts)
})
// ==================================
app.use("/api/auth", authRouter);
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message })
})

module.exports = app
