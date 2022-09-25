const fs = require('fs/promises');
const path = require('node:path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, "contacts.json"); 
 const updateContacts = async (books) => await fs.writeFile(contactsPath, JSON.stringify(books, null, 2));

 const listContacts = async () => {
   const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactsIndex = contacts.find(contact => contact.id === contactId);
  return contactsIndex || null;
}

const removeContact = async (contactId) => {
   const contacts = await listContacts();
  const contactIndex = contacts.findIndex(contact => contact.id === contactId);
      if (contactIndex === -1) {
        return null;
      }
  const [result] = contacts.splice(contactIndex, 1);
  await updateContacts(contacts);
  return result;
}

const addContact = async ({name, email, phone}) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

const updateContact = async (id,{name, email, phone}) => {
  const contacts = await listContacts();
  const result = contacts.findIndex(contact => contact.id === id);
  if (result === -1) {
    return null;
  }
  contacts[result] = {id, name, email, phone };
  await updateContacts(contacts);
  return contacts[result];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
