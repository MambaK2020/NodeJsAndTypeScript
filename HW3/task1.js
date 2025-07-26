// Задание 1

const fs = require('fs')

fs.mkdir('myFolder', (err)=>{
    if(err) {
        console.error('Ошибка при создании католога;', err);
        return
    }
    console.log('Католог успешно создан ')

    fs.rmdir('myFolder', (err)=>{
        if(err) {
            console.error('Ошибка удаления каталога', err);
            return
        }
        console.log('Католог успешно удален');
    })
});