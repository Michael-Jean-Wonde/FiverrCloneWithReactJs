import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import connectDB from './config/db.js';
import gigRoutes from './routes/gigRoutes.js';
import getjobRoutes from './routes/getjobRoutes.js';
import jobRoute from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';


dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Api is running....')
});

app.use('/gigs', gigRoutes);
app.use('/postjob',jobRoute);
app.use('/getjob',getjobRoutes);
app.use('/user', userRoutes);
app.use('/upload', uploadRoutes);
const _dirname = path.resolve()
app.use('/uploads', express.static(path.join(_dirname, '/uploads')))

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