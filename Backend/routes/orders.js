 // orderRoutes.js
import express from "express";
import { requireAuth } from '@clerk/express';
import Order from '../models/order.js';

const router = express.Router();

// POST route to store an order
router.post('/', async (req, res) => {
  const { name, contact, quantity, itemId, itemTitle, itemRate } = req.body;

  if (!name || !contact || !quantity || !itemId) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const order = new Order({ name, contact, quantity, itemId, itemTitle, itemRate });
    await order.save();
    res.status(200).json({ message: 'Order saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save order', error: err });


  }
});

router.get('/total-items', async (req, res) => {
  try {
    const result = await Order.aggregate([
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




 router.get('/', async (req, res) => {
  try {
    const items = await Order.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting order', error: err });
  }
});


export default router;
