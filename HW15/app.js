import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New user has connected: ', socket.id);

  socket.on('chat message', (msg) => {
    console.log(`Message from ${socket.id}: ${msg}`);

    io.emit('message received', `User ${socket.id}: ${msg}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected: ', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
