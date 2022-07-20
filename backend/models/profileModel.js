import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'User',
  },
  image: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
  },
  skillCategory: {
    type: String,
    required:true
  },
  skill: {
    type: String,
    required:true
  },

});
const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
