const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');

//postPerson
const postPerson = async (req, res) => { 
 
  try {
    const data = req.body // Assuming the request body contains the person data
     
    //Create a new Person document using the Mongoose model
    const newPerson = new Person(data);
    
    //Save the new person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server error' });
  }

};
//getPerson
const getPerson = async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fetched successfully');
    res.status(200).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// getPerson according to workType
const getPersonWithWorkType = async (req, res) => {
  try {
    const workType = req.params.work;// Extract the work type from the URL parameter

    if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
     
      // Assuming you already have a Person model and MongoDB connection set up
      const persons = await Person.find({ work: workType });
      console.log('response fetched');
      res.status(200).json(persons);
    }
    else {
      res.status(404).json({ error: 'Invalid work type' });
    }
  }
  catch (err) {
    console.error('Error fetching persons:', err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
};

router.post('/', postPerson);// Handle POST /person
router.get('/', getPerson);// Handle GET /person
router.get('/:work', getPersonWithWorkType);// Handle GET /person/work
router.put('/:id', async(req, res) => {
  try {
      const personId = req.params.id;//Extract the id from the URL parameter
  const updatedPersonData = req.body; // Updated data for the person.

  const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
    new: true,//return the updated document
    runValidators: true,//run Mongoose validation
  });//predefined fn in mongoDB

    if (!response) {
      return res.status(404).json({ error: 'Person not found.' });
    }
  console.log("data updated.");
  res.status(200).json(response);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error." });
  }
})//update person with id
//delete person with id
router.delete('/:id', async(req, res) => {
  try {
    const personId = req.params.id;//Extract the person's ID from the URL parameter
    //Assuming you have a  Person model.
    const response = await Person.findByIdAndRemove(personId);
    if (!response) {
      return res.status(404).json({ error: 'Person not found.' });
    } 
    console.log('data deleted');
    res.status(200).json({ message: 'person Deleted Successfully' });

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
})

module.exports = router;