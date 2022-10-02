const contacts = require("../../models");
const { RequestError } = require("../../helpers");

const removeContact = async(req, res) => {
    const {id} = req.params;
    const result = await contacts.removeContact(id);
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json({
        message: "Book remove"
    })
}

module.exports = removeContact;