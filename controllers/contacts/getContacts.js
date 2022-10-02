const contacts = require("../../models");
const { RequestError } = require("../../helpers");

const getContact = async(req, res) => {
    const {id} = req.params;
    const result = await contacts.getContact(id);
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result)
}

module.exports = getContact;