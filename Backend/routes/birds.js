import bird from "../models/bird.js"
import express from "express"
const router = express.Router();


const BirdsRouter=router.get('/', async (req, res) => {
  const search = req.query.search || '';
  
  try {
    const items = await bird.find({
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

  const newBird = new bird({
    title,
    image,
    rate
  });

  try {
    const savedBird = await newBird.save();
    res.status(201).json(savedBird);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const deletedBird = await bird.findByIdAndDelete(req.params.id);
    if (!deletedBird) {
      return res.status(404).json({ message: "Bird not found" });
    }
    res.json({ message: "Bird deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default BirdsRouter