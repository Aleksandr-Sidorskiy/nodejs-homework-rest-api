const ctrlWrapper = require("./ctrlWrapper");
const RequestError = require("./RequestError");
// const handeleSaveErrors = require("./handeleSaveErrors");
const sendEmail = require("./sendEmail");
const createVerifyEmail = require("./createVerifyEmail")
module.exports = {
    sendEmail,
    ctrlWrapper,
    RequestError,
    createVerifyEmail,
    // handeleSaveErrors,
}