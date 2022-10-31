const register = require("./register");
const login = require("./login");
const current = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require('./resendVerify');

module.exports = {
    register,
    login,
    current,
    logout,
    updateAvatar,
    verify,
    resendVerify,
};