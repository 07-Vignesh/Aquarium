import item from "../models/item.js"

import express from "express"
const router = express.Router();


router.get('/', async (req, res) => {
  const search = req.query.search || '';
  
  try {
    const items = await item.find({
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

  const newItem = new item({
    title,
    image,
    rate
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "item not found" });
    }
    res.json({ message: "item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router
