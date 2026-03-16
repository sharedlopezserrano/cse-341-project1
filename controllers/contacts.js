const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().collection('contacts').find();
        result.toArray().then((users) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(users);

    })
    };

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection('contacts').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);

    })  
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await mongodb.getDatabase().collection('contacts').insertOne(contact);

  if (response.acknowledged) {
    res.status(201).send();
  } else {
    res.status(500).json(response.error);
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  
  const response = await mongodb
    .getDatabase()
    .collection('contacts')
    .deleteOne({ _id: contactId });

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while deleting the contact.");
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await mongodb
    .getDatabase()
    .collection('contacts')
    .replaceOne({ _id: contactId }, contact);

  if (response.matchedCount > 0) {
    res.status(204).send();
  } else {
    res.status(404).json("Contact not found");
  }
};

module.exports = { 
    getAll,
    getSingle,
    createContact,
    deleteContact,
    updateContact
};

