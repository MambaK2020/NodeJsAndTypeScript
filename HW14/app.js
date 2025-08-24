import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from './models/Category.js';
import Product from './models/Product.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Successful connection to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB: ', err.message);
        process.exit(1);
    }
};

app.use(express.json());

app.get('/', (_, res)=>{
    res.send('Home page');
});

app.post('/categories', async (req,res)=>{
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

app.post('/products', async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

app.get('/products', async (_,res)=>{
    try {
        const product = await Product.find().populate('category');
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})