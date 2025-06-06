import fish from "../models/fish.js";
import food from "../models/food.js"

import express from "express"
const router = express.Router();


const FoodRouter=router.get('/', async (req, res) => {
  const search = req.query.search || '';
  
  try {
    const items = await food.find({
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

  const newFoods = new food({
    title,
    image,
    rate
  });

  try {
    const saveFoods = await newFoods.save();
    res.status(201).json(saveFoods);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const deletedFood = await food.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Bird not found" });
    }
    res.json({ message: "Bird deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default FoodRouter