const fs = require('fs');

function logMessage(message) {
  const timestamp = new Date().toISOString();
  fs.appendFile('log.txt', `${timestamp} - ${message}\n`, (err) => {
    if (err) {
      console.error('Ошибка при записи в лог:', err);
    }
  });
}


module.exports = logMessage;
