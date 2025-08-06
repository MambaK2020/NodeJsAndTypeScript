import express from 'express';
import connection from "./db.js";

const app = express();
app.use(express.json())
const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`Сервер запущен  http://localhost:${PORT}`);
});

app.get('/', (_, res)=>{
    try{
        res.status(200).send('Hello, World!');
    } catch (err) {
        res.status(500).send('Ошибка сервера');
    }
});

app.post('/', (req,res)=>{
    try {
        const {name} = req.body;

        if(!name) {
            return res.status(400).send('Поле name обязательно');
        }

        res.status(200).send(`Привет, ${name}!`);
    } catch (err) {
        res.status(500).send(`Ошибка сервера`);
    }
});

app.get('/products', async (_, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        res.status(500).send('Ошибка получения данных');
    }
});

app.post('/products', async (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price) {
            return res.status(400).send('Поля name и price обязательны');
        }

        const [result] = await connection.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
        res.status(201).send(`Продукт добавлен с ID: ${result.insertId}`);
    } catch (err) {
        res.status(500).send('Ошибка добавления продукта');
    }
});

