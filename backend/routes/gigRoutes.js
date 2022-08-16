import express from "express";
const router = express.Router();
import Gig from "../models/gigsModel.js";

router.route("/addGig").post((req, res) => {
  const title = req.body.title;
  const categoryOne = req.body.categoryOne;
  const categoryTwo = req.body.categoryTwo;
  const serviceType = req.body.serviceType;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;
  const newGig = new Gig({
    title,
    categoryOne,
    categoryTwo,
    serviceType,
    price,
    description,
    image
  });

  newGig.save();
});

router.route("/gigsList").get((req, res) => {
    Gig.find().then((foundGigs) => res.json(foundGigs));
  });

export default router;