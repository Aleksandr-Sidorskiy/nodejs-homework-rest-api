const { Contact } = require("../../models");

const listContacts = async (req, res) => {
    const { _id: owner } = req.user;
    // const { page = 1, limit = 20 } = req.query;
    // const skip = (page - 1) * limit;
    const result = await Contact.find({ owner });
    res.json(result);
}

module.exports = listContacts;