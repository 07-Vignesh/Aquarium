// routes/cart.js
import express from "express";
import Cart from "../models/cart.js";
import { mockAuth } from "../middleware/mockAuth.js";

const router = express.Router();

// Get user's cart
router.get("/", mockAuth, async (req, res) => {
  const userId = req.auth.userId;
  const cart = await Cart.findOne({ userId });
  res.json(cart || { items: [] });
});


router.get('/total-items', async (req, res) => {
  try {
    const result = await Cart.aggregate([
      { $unwind: "$items" }, // flatten the items array
      {
        $group: {
          _id: null,
          totalQuantity: { $sum: "$items.quantity" } // sum the quantity of each item
        }
      }
    ]);

    const totalItems = result[0]?.totalQuantity || 0;
    res.status(200).json({ totalItems });
  } catch (err) {
    res.status(500).json({ message: 'Error calculating total items', error: err.message });
  }
});

router.get('/total-items', async (req, res) => {
  try {
    const result = await Cart.aggregate([
      {
        $group: {
          _id: null,
          totalQuantity: { $sum: "$quantity" }
        }
      }
    ]);

    const totalItems = result[0]?.totalQuantity || 0;
    res.status(200).json({ totalItems });
  } catch (err) {
    res.status(500).json({ message: 'Error calculating total items', error: err });
  }
});



// Add item to cart
router.post("/", mockAuth, async (req, res) => {
  const userId = req.auth.userId;
  const { item } = req.body;

  if (!item || !item.itemId) {
    return res.status(400).json({ message: "Invalid item format" });
  }

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [item] });
  } else {
    const exists = cart.items.find(i => i.itemId === item.itemId);
    if (exists) {
      exists.quantity += item.quantity || 1;
    } else {
      cart.items.push(item);
    }
  }

  await cart.save();
  res.json(cart);
});

// Remove item from cart
router.delete("/:itemId", mockAuth, async (req, res) => {
  const userId = req.auth.userId;
  const { itemId } = req.params;

  const cart = await Cart.findOneAndUpdate(
    { userId },
    { $pull: { items: { itemId } } },
    { new: true }
  );

  res.json(cart);
});

export default router;
