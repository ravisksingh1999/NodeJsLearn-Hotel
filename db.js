const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
//STEP - 1
// const mongoURL = process.env.LOCAL_MONGODB_URL;
const mongoURL = process.env.MONGODB_URL;
// STEP - 2
mongoose.connect(mongoURL);

// STEP -3
// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// STEP - 4
// Define the event listeners for database connection
// connected, error, disconnected are event listener keyword

db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
}); 

// STEP - 5
//Export the database connection
module.exports = db;


