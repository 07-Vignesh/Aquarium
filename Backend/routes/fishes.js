import fish from "../models/fish.js"
import express from "express"
const router = express.Router();


const FishRouter=
router.get('/', async (req, res) => {
  const search = req.query.search || '';
  
  try {
    const items = await fish.find({
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

  const newFish = new fish({
    title,
    image,
    rate
  });

  try {
    const saveFish = await newFish.save();
    res.status(201).json(saveFish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const deletedFish = await fish.findByIdAndDelete(req.params.id);
    if (!deletedFish) {
      return res.status(404).json({ message: "Fish not found" });
    }
    res.json({ message: "Fish deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default FishRouter