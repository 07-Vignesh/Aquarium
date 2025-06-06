import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true  
  }
});

export default mongoose.model('food', FoodSchema);
