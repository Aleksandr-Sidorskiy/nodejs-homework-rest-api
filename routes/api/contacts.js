const express = require('express')
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const {validateBody} = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();
// const Joi = require('joi');

// const contactsOperations = require("../../models/contacts");

// const contactSchema = Joi.object({
//   name: Joi.string()
//     .alphanum()
//     .min(3)
//     .max(30)
//     .required(),
  
//   email: Joi.string()
//     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
//     .required(),

//   phone: Joi.string()
//     .pattern(/^[0-9]+$/, 'numbers')
//     .required(),
// });
// отримати усі контакти
router.get("/", ctrlWrapper(ctrl.listContacts));
// router.get('/', async (req, res, next) => {
//   try {
    
//     const contacts = await contactsOperations.listContacts();
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result: contacts,
//       }
//     });
//   } catch (error) {
//    next(error)
//   }
// });
// отримати одного контакта
// router.get('/:contactId', async (req, res, next) => {

//   try {
//     const { contactId } = req.params;
//     const result = await contactsOperations.getContactById(contactId);

//     if (!result) {
//      const error =  new Error(`Contact with id=${contactId} not found `);
//       error.status = 404;
//       throw error;
//   }
//     res.json({
//        status: "success",
//       code: 200,
//       data: {
//         result
//       }
//     })
//   } catch (error) {
//     next(error);
//   }
// })
// добавлення контакта
router.post("/",validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact) );

// router.post('/', async (req, res, next) => {
//   try {
//     const { error } = contactSchema.validate(req.body);
//     if (error) {
//       error.status = 400;
//       throw error;
//     }
//     const contacts = await contactsOperations.addContact(req.body);
//     res.status(201).json({
//       status: "success",
//       code: 201,
//       data: {
//         contacts
//       }
//     })
//   } catch (error) {
//     next(error);
//   }
// })

// видалення контакта
// router.delete('/:contactId', async (req, res, next) => {
// try {
//   const { contactId } = req.params;
//   const result = await contactsOperations.removeContact(contactId);
//   if (!result) {
//      const error =  new Error(`Contact with id=${contactId} not found `);
//       error.status = 404;
//       throw error;
//   }
//    res.json({
//      status: "success",
//      message: "contact deleted",
//       code: 200,
//       data: {
//         result
//       }
//    })
  
// } catch (error) {
//   next(error);
// }
// })

// оновлення контакта
// router.put('/:contactId', async (req, res, next) => {
//   try {
//     const { error } = contactSchema.validate(req.body);
//      if (error) {
//       error.status = 400;
//       throw error;
//     }

//     const { contactId } = req.params;
//     const result = await contactsOperations.updateContact(contactId, req.body);
//     if (!result) {
//      const error =  new Error(`Contact with id=${contactId} not found `);
//       error.status = 404;
//       throw error;
//   }
//     res.json({
//        status: "success",
//       code: 200,
//       data: {
//         result
//       }
//     })

//   } catch (error) {
//     next(error)
//   }

// })

module.exports = router
