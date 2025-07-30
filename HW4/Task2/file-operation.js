require('dotenv').config();
const fs = require('fs');

const filename = process.env.FILENAME;
const content = 'Hallo World!'

try{
fs.writeFileSync(filename, content);
console.log('Данные успешно записаны в файл');
} catch (err) {
    console.error('Ошибка при записи в файл', err);
}

try{

    const data = fs.readFileSync(filename, 'utf8');
    console.log('Содержимое файла:', data);
} catch(err){
    console.error('Ошибка при чтении файла', err)
}
