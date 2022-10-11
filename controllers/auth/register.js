const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcrypt");



const register = async (req, res) => {
    const { email, password, subscription, token } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw RequestError(409,  "Email in use")
    }
    const hashPassword =  await bcrypt.hash(password, 10);
    const result = await User.create({ email, password:hashPassword, subscription, token });
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
        token:result.token,
    })
};

module.exports = register;