import mongoose from "mongoose";
const Birdschema = new mongoose.Schema({
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

export default mongoose.model('bird', Birdschema);
