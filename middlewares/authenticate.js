const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res) => {
    const { authorization } = req.headers;
    const { bearer, token } = authorization.split("");
};

module.exports = authenticate;