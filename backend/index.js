import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'
import jobRoutes from './routes/jobRoutes.js'

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

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));