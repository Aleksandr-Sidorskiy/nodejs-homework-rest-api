const express = require('express')
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const {validateBody, isValidId, authenticate} = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

// отримати усі контакти

router.get("/",authenticate, ctrlWrapper(ctrl.listContacts));

// отримати одного контакта
router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getContact));

// добавлення контакта        
router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

// видалення контакта
router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeContact));

// оновлення контакта
router.put("/:id", authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:id/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
