import express, {Application, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello, World!');
});

app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({ received: data });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});