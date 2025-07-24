const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('message', (data)=>{

    console.log (`${data.user}: ${data.message}`);
});
function sendMessage (user, message) {

    emitter.emit('message', {user, message} )

}

sendMessage('John', 'What`s up bro')
sendMessage('Alex', 'I am fine')
sendMessage('Kobe', 'I connected now')
