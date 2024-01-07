const mongoose = require("mongoose");
const path = require("path");
// Cheat copy code for terminal
// node C:\Users\Student\Code\SavvyCoders\CapStone\components\scripts\testConnection.js
// Load environment variables from .env file (if not already loaded)
require("dotenv").config({
  path: path.resolve(__dirname, "../../server/.env")
});

// Troubleshooting .env var
console.log(process.env.MONGODB);

// Ensure that process.env.MONGODB is set
if (!process.env.MONGODB) {
  console.error("MONGODB environment variable is not set.");
  process.exit(1);
}

// MongoDB connection string
const mongoUri = process.env.MONGODB;

// Connect to MongoDB
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on("connected", () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

// Event listener for connection error
db.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
});

// Event listener for disconnection
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Close the connection when the script exits
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
});
