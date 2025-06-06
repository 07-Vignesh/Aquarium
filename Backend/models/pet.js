import mongoose from "mongoose";
const PetSchema = new mongoose.Schema({
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

export default mongoose.model('pet', PetSchema);
