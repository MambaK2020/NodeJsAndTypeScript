import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3000;
app.use(express.json());
app.get('/', (_, res) => {
    res.send('Hello, World!');
});
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map