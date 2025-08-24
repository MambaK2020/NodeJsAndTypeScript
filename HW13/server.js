import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Article from './models/Article.js';
import Magazine from './models/Magazine.js';
import Publisher from './models/Publisher.js';
import Tag from './models/Tag.js';


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

app.get('/test', async (req,res)=>{
    try {

        const publisher = await Publisher.create({
            name: 'Atlant spread his wings',
            location: 'LA',
        });

        const magazine = await Magazine.create({
            title:"JP Morgen",
            issueNumber: '48',
            publisher: publisher._id
        });

        const article = await Article.create({
            title: 'MongoDB Basic',
            content: 'Mongoose connections...',
        });

        const tag = await Tag.create({name: 'Database', articles: [article._id] });
        article.tags.push(tag._id);
        await article.save();

        res.json({ publisher, magazine, article, tag});
    }catch (err) {
        res.status(500).json({ error: err.message});
    }
});

app.listen(PORT, ()=>{
    console.group(`Server is running on http://localhost:${PORT}`)
});