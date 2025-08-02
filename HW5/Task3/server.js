import http from 'http';

const server = http.createServer((req,res)=>{

    const method = req.method;

    if(method === 'PUT') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf8');
        res.end('Put-запрос обработан');
    } else if (method === 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf8');
        res.end('DELETE-запрос обработан');
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain; charset=utf8');
        res.end('Метод не поддерживается');
    }
})
const PORT = 3000
server.listen(3000, () => {
    console.log(`Сервер запущен: ${PORT}`);
  });