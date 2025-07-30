const moment = require('moment')

const format1 = moment().format('DD-MM-YYYY');
const format2 = moment().format('MMM Do YY');
const format3 = moment().format('dddd');

console.log('Формат 1 (DD-MM-YYYY):', format1);
console.log('Формат 2 (MMM Do YY):', format2);
console.log('Формат 3 (dddd):', format3);

