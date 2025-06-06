// models/cart.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  title: String,
  rate: Number,
  quantity: { type: Number, default: 1 },
  image: String
});

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [ItemSchema]
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
