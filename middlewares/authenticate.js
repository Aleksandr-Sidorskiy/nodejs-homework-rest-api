// const { User } = require("../models");
// const jwt = require("jsonwebtoken");
// const { SECRET_KEY } = process.env;
// const {RequestError}=require("../helpers")

const authenticate = async (req, res, next) => {
    // try {
    //     const { authorization } = req.headers;
    //     const [bearer, token] = authorization.split(" ");
    //     if (bearer !== "Bearer") {
    //         throw RequestError(401);
    //     }
    //     try {
    //         const { id } = jwt.verify(token, SECRET_KEY);
    //         const user = await User.findById(id);
    //         if (!user) {
    //             throw Error("Unauthorized")
    //         }
    //         next()
    //     } catch (error) {
    //         throw RequestError(401);
    //     }
        
    // } catch (error) {
    //     next(error)
    // }
};

module.exports = authenticate;