import { Router } from "express";
import Message from "../models/Messages.js";

const router = Router();

// Create messages route
router.post("/", async (request, response) => {
  try {
    const newMessage = new Message(request.body);

    const data = await newMessage.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all messages route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Message.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single message by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Message.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a message by ID
router.delete("/:id", async (request, response) => {
  try {
    console.log("Hey there, request log Follows....");
    console.log(request.params.id);
    const data = await Message.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single message by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Message.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          email: body.email,
          message: body.message
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
