import Job from "../models/jobModel.js";
import asyncHandler from "express-async-handler";
import Profile from "../models/profileModel.js";

const Addjob = asyncHandler(async(req,res)=>{
    const {id, maintitle, category, category2, days, price}=req.body;
    const job = await Job.create({id, maintitle, category, category2, days, price})
    if (job) {
        res.json(job)
    } else {
        res.status(404)
        throw new Error('Invalid data')
    }
})

const getjobbyuser = asyncHandler(async(req,res)=>{
    const userid = req.params.id
    const jobs = await Job.find({id: `${userid}`})
    if (jobs) {
        res.json(jobs)
    } else {
        res.status(404)
        throw new Error('Job not found')
    }
})

export {Addjob, getjobbyuser}
