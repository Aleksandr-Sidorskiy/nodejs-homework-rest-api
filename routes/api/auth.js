const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const {validateBody, authenticate, upload} = require("../../middlewares");
const ctrl = require("../../controllers/auth");
const {schemas} = require("../../models/user");

const router = express.Router();

// singup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));
// singin
router.post("/login",validateBody(schemas.registerSchema), ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout))
router.patch("/avatars", authenticate,upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;