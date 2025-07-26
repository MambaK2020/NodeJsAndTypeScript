// Задание 2

const fs = require('fs')

const content = 'Node.js is awesome!'

fs.writeFile('info.txt', content, 'utf-8', (err)=>{
    if(err) {
        console.error('Ошибка при записи в файл', err);
        return;
    }
    console.log('Данные успешно записаны в файл');

    fs.readFile('info.txt', 'utf-8', (err,data)=>{
        if(err){
        console.error('Ошибка при чтении файла: ', err);
        return;
        }
        console.log('Текст файла: ', data)
    })
});