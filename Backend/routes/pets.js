import pet from "../models/pet.js";
import pets from "../models/pet.js"

import express from "express"
const router = express.Router();


const PetsRouter =
router.get('/', async (req, res) => {
  const search = req.query.search || '';
  
  try {
    const items = await pet.find({
      title: { $regex: search, $options: 'i' } // case-insensitive
    });
    
    res.status(200).json(items);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: 'Server error' });
  }
});




router.post("/", async (req, res) => {
  const { title, image, rate } = req.body;

  const newPet = new pet({
    title,
    image,
    rate
  });

  try {
    const savedPets = await newPet.save();
    res.status(201).json(savedPets);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const deletedPets = await pets.findByIdAndDelete(req.params.id);
    if (!deletedPets) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.json({ message: "Pet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default PetsRouter