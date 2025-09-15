// Задание 4
// Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.
export function generateFibonacci(limit) {
    const fib = [0, 1];
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit)
            break;
        fib.push(next);
    }
    return fib;
}
export function generatePrimeNumbers(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            primes.push(num);
    }
    return primes;
}
//# sourceMappingURL=sequenceUtils.js.map