const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const {validateBody} = require("../../middlewares");
const ctrl = require("../../controllers/auth");
const {schemas} = require("../../models/user");

const router = express.Router();


router.post("/register",validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));
router.post("/login",validateBody(schemas.registerSchema), ctrlWrapper(ctrl.login));

module.exports = router;