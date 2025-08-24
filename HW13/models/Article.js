import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
});

const Article = mongoose.model('Article', articleSchema);

export default Article;