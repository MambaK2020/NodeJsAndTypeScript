import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=>{

    

    try{

        throw new Error('Тестовая ошибка')
        
    }catch (err) {
        fs.appendFile('errors.log', `${new Date().toISOString()} - ${err.message}\n`, (err) => {
            if (err) {
              console.error('Ошибка при записи в лог:', err);
            }
          });

          res.statusCode = 500;
          res.setHeader('Content-Type','text/plain');
          res.end('Server Error');
        }
    });
const PORT = 3000
    server.listen(3000, () => {
        console.log(`Сервер запущен: ${PORT}`);
      });