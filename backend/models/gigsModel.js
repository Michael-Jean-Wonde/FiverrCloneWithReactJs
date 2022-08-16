import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categoryOne: {
    type: String,
    required: true,
  },
  categoryTwo: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Gig = mongoose.model("Gig", gigSchema);
export default Gig;
