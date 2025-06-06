import product from "../models/product.js"


import express from "express"
const router = express.Router();


const PetsRouter =
router.get('/', async (req, res) => {
  const search = req.query.search || '';
  
  try {
    const items = await product.find({
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

  const newProduct = new product({
    title,
    image,
    rate
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default PetsRouter