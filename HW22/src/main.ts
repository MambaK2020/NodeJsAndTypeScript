import { capitalize, reverseString } from './modules/stringUtils.js';
import { Finance } from './modules/finance.js';
import { UserManagement } from './modules/userManagement.js';
import { generateFibonacci, generatePrimeNumbers } from './modules/sequenceUtils.js';


// Task1
console.log(capitalize('typescript'));
console.log(capitalize('new string'));

console.log(reverseString('TypeScript'));
console.log(reverseString('hello'));

// Task2
const loan = new Finance.LoanCalculator(8000, 12, 24);
const monthlyPayment = loan.calculateMonthlyPayment();
console.log(`Ежемесячный платеж по кредиту: ${monthlyPayment.toFixed(2)} евро`);


// Task3

const admin = new UserManagement.Admin.AdminUser('Dan Reynolds', 'dan@example.com');

console.log(`${admin.name} is super-admin?`, admin.isSuperAdmin);

admin.promoteToSuperAdmin();
console.log(`${admin.name} is super-admin?`, admin.isSuperAdmin);

admin.demoteToAdmin();
console.log(`${admin.name} is super-admin?`, admin.isSuperAdmin);

// Task4

const fibonacciSequence = generateFibonacci(130);
console.log('Последовательность Фибоначчи до 130:', fibonacciSequence);

const primeNumbers = generatePrimeNumbers(20);
console.log('Простые числа до 20:', primeNumbers);