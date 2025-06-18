import Contact from '../models/Contact.js';

const createContact = async (req, res) => {
  const {
    fullName,
    organisationName,
    phoneNumber,
    email,
    services,
    briefDescription
  } = req.body;

  try {
    const contact = new Contact({
      fullName,
      organisationName,
      phoneNumber,
      email,
      services,
      briefDescription
    });
    await contact.save();

    res.status(201).json({ message: 'New contact message saved for admin review', contact });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save contact message', error: error.message });
  }
};

// Add to contactController.js
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contacts', error: error.message });
  }
};

export default { createContact, getContacts };
