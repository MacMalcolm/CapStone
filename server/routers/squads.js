import { Router } from "express";
import Squad from "../models/Squads.js";

const router = Router();

// Create Squad route
router.post("/", async (request, response) => {
  try {
    const newSquad = new Squad(request.body);

    const data = await newSquad.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all squads route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Squad.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single squad by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Squad.findById(request.params.id);

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
    console.log(request.params.id);
    const data = await Squad.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single Squad by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Squad.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          squad: body.squad,
          time: body.time,
          day: body.day,
          availability: body.availability
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
