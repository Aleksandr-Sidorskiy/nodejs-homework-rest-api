const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../middlewares");

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  // token: {
  //   type: String,
  //   default: null,
  // },
  

});

userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string(),
    token: Joi.string(),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
});

const schemas = {
    registerSchema,
    loginSchema,
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas,
}