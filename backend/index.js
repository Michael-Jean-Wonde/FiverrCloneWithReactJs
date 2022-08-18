import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors'
import connectDB from './config/db.js';
import gigRoutes from './routes/gigRoutes.js';
import getjobRoutes from './routes/getjobRoutes.js';
import jobRoute from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

import checkOut from './paymentServer.js';
import stripe from './paymentServer.js'


dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Api is running....')
});

app.use('/', gigRoutes);
app.use('/',jobRoute);
// Checkout request handler
app.use("/api/stripe", stripe);
app.post("/order", checkOut);

app.use('/getjob',getjobRoutes);
app.use('/user', userRoutes);
app.use('/upload', uploadRoutes);
const _dirname = path.resolve()
app.use('/uploads', express.static(path.join(_dirname, '/uploads')));





app.use((req,res,next)=>{
    const error = new Error('not found');
    res.status(404)
    next(error)
})

app.use((req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`));