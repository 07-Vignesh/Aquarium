import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  quantity: Number,
  itemId: String,
  itemTitle: String,
  itemRate: Number ||34 ,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('order', orderSchema);
