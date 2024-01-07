require(`dotenv`).config();
const express = require('express');
const mongoose = require('mongoose'); // Imports libraries and creates instances to act upon.

const app = express(); // Initializes the server by storing an Express instance in the app variable to be acted upon.
const port = process.env.port || 3000; // What is the purpose of ||? -> If process.env.port is === null, then set to 3000.

// Conecting to MongoDB using Mongoose. Mongoose simplifies interactions with MongoDB and allows functionality with data manipulation.

mongoose.connect('mongodb://localhost:2017/mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@localhost:27017/${process.env.MONGO_DATABASE}', { //What are we connecting to? Where do I find my actual connection string?
useNewUrlParser: true, //What is an Url Parser and its purpose?
useUnifiedTopology: true,
});

// Define a Mongoose schema for your form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a Mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Serve your static files (HTML, CSS, JS)
app.use(express.static('public'));

// Parse JSON and urlencoded data. ?What is parsing?
app.use(express.json());
app.use(express.urlencoded({ extended: true}));  // What does this line and above do?

// Handle form submissions
app.post(`/submit`, async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: `Please fill in all fields.`});
  }

  // Save form data to MongoDB
  try {
    const formData = new FormData({ name, email, message });
await formData.save();

res.json({ message: `Form sent succesfully!`});
  } catch (error) {
    console.error(`Error during form submission:`, error);
    res.status(500).json({ error: `An error occured. Please try again later.`});
  }
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
