import express from "express";
const router = express.Router();
import Job from "../models/jobModel.js";

router.route("/postJob").post((req, res) => {
  const maintitle = req.body.maintitle;
  const category = req.body.category;
  const category2 = req.body.category2;
  const days = req.body.days;
  const price = req.body.price;
  const newJob = new Job({
    maintitle,
    category,
    category2,
    days,
    price,
  });

  newJob.save();
});

router.route("/jobsList").get((req, res) => {
  Job.find().then((foundJobs) => res.json(foundJobs));
});

export default router;
