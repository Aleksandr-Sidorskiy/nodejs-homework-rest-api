const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;
console.log("login", SECRET_KEY);

const login = async (req, res) => {
    const { email, password } = req.body;
     const user = await User.findOne({ email });
    if (!user) {
        throw RequestError(401,  "Email not found")
    };
        const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw RequestError(401, "Password is wrong");
    };
    const payload = {
        id: user._id,
    };
    
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
   
    res.json({
        token,
    })


};

module.exports = login;