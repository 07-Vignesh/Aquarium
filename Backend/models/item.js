import mongoose from "mongoose"
const itemSchema = new mongoose.Schema({
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

export default mongoose.model('item', itemSchema);
