const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const {validateBody, isValidId} = require("../../middlewares");
const ctrl = require("../../controllers/auth");

const router = express.Router();


router.post("/register", ctrlWrapper(ctrl.register));

module.express = router;