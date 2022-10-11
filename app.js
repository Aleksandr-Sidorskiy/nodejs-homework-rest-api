// I6ZO0NCYpRo0pO7R 
// const mongoose = require("mongoose");
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');
require("dotenv").config();
const authRouter = require("./routes/api/auth");
// const jwt = require("jsonwebtoken");

// const { SECRET_KEY } = process.env;
// const payload = {
//   id: "634070472bfa4066fa48f459",
// };
// const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
// console.log(token);

// try {
//   const result1 = jwt.verify(token, SECRET_KEY)
//   console.log(result1);
// } catch (error) {
  
// }

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

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
