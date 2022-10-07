const express = require('express')
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const {validateBody, isValidId} = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

// отримати усі контакти

router.get("/", ctrlWrapper(ctrl.listContacts));

// отримати одного контакта
router.get("/:id", isValidId, ctrlWrapper(ctrl.getContact));

// добавлення контакта        
router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

// видалення контакта
router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

// оновлення контакта
router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));
module.exports = router
