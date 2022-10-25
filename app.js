// I6ZO0NCYpRo0pO7R 
require("dotenv").config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');
const authRouter = require("./routes/api/auth");
// ===========================
// const sgMail = require("@sendgrid/mail")
// const { SENDGRID_API_KEY } = process.env;
// sgMail.setApiKey(SENDGRID_API_KEY);

// const mail = {
//   to: "sanu43967@gmail.com",
//   from: "sanuch3967@gmail.com",
//   subject: "HW6",
//   html: "text letter"
// };

// sgMail.send(mail)
//   .then(() => console.log("mail send success"))
//   .catch(error => console.log(error.message))
// ===============================
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
