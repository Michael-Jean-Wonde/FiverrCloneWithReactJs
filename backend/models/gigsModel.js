import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'User',
  },
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
    required:true
  },
  metadata: {
    type: String,
    required:true
  },
  searchTag: [{
    type: String,
    required:true
  }],
  pkgname:[{
    name:{
        type:String,
        required: true,
    },
  }],
  pkgdiscription:[{
    discription:{
        type:String,
        required: true,
    },
  }],
  deliveryTime:[{
    days:{
        type:String,
        required: true,
    },
  }],
  numOfPages:[{
    pagesNum:{
        type:String,
        required: true,
    },
  }],
  numOfProducts:[{
    productsNum:{
        type:String,
        required: true,
    },
  }],
  customization:[{
    name:{
        type:Boolean,
        required: true,
    },
  }],
  responsiveDesign:[{
    name:{
        type:Boolean,
        required: true,
    },
  }],
  numOfProducts:[{
    productsNum:{
        type:String,
        required: true,
    },
  }],
  contentUpload:[{
    name:{
        type:Boolean,
        required: true,
    },
  }],
  revisions:[{
    name:{
        type:String,
        required: true,
    },
  }],
  price:[{
    name:{
        type:Number,
        required: true,
    },
  }],
  image:{
        type:String,
        required: true,
    },

});
const Gig = mongoose.model("Gig", gigSchema);
export default Gig;
