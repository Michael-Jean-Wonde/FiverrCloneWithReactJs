import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import gigRoutes from './routes/gigRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import getjobRoutes from './routes/getjobRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Api is running....')
});

app.use('/gig', gigRoutes);
app.use('/postjob', jobRoutes);
app.use('/getjob',getjobRoutes);
app.use('/user',userRoutes);


app.use((req,res,next)=>{
    const error = new Error('not found')
    res.status(404)
    next(error)
})

app.use((req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message
    })
})







const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));