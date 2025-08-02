import http from 'http'

const server = http.createServer((req, res)=>{
    
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        res.statusCode = 401;
        res.setHeader('Content-Type','text/plain');
        res.end('Unauthorized');
    }else {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Authorization');
    }
})


server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
  });
  