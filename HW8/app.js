import express from 'express';
import sequelize from './config/db.js';
import Book from './models/book.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', async (_, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка при получении книг' });
    }
});

app.post('/books', async (req, res) => {
    try {
        const { title, author, year } = req.body;

        if (!title || !author || !year) {
            return res.status(400).json({ error: 'Все поля обязательны' });
        }

        const newBook = await Book.create({ title, author, year });
        res.status(201).json(newBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка при добавлении книги' });
    }
});

app.put('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, year } = req.body;

        const [updated] = await Book.update(
            { title, author, year },
            { where: { id } }
        );

        if (!updated) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }

        res.json({ message: 'Книга обновлена' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка при обновлении книги' });
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Book.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }

        res.json({ message: 'Книга удалена' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка при удалении книги' });
    }
});


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
