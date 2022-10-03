const express = require('express')
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const {validateBody, isValidId} = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

// отримати усі контакти

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
router.get("/", ctrlWrapper(ctrl.listContacts));

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
router.get("/:id", isValidId, ctrlWrapper(ctrl.getContact));

// добавлення контакта
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
router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

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
router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

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
router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));
module.exports = router
