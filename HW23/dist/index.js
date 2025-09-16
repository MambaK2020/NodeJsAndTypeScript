"use strict";
// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Задание A выполнено'), 1000);
    });
}
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Задание B выполнено'), 2000);
    });
}
function task3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Задание C выполнено'), 3000);
    });
}
async function runAllTasks() {
    const resultA = await task1();
    console.log(resultA);
    const resultB = await task2();
    console.log(resultB);
    const resultC = await task3();
    console.log(resultC);
    console.log('Все задания выполнены');
}
runAllTasks();
//   Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.
function processString(str) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 500;
        setTimeout(() => resolve(str.toUpperCase()), delay);
    });
}
async function processArray(strings) {
    const results = await Promise.all(strings.map(processString));
    console.log(results);
}
processArray(['World', 'Please', 'javascript', 'await']);
// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`.
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.
function promise1() {
    return new Promise((resolve) => setTimeout(() => resolve('First promise'), 1000));
}
function promise2() {
    return new Promise((resolve) => setTimeout(() => resolve('Second promise'), 2000));
}
function promise3() {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('Third promise')), 3000));
}
async function runAllPromises() {
    try {
        const results = await Promise.all([promise1(), promise2(), promise3()]);
        console.log('Все результаты:', results);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Произошла ошибка:', error.message);
        }
        else {
            console.error('Неизвестная ошибка:', error);
        }
    }
}
runAllPromises();
//Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.
function delayWithValue(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}
async function processNumbers(nums) {
    const results = await Promise.all(nums.map(delayWithValue));
    console.log('Все промисы отработали:', results);
}
processNumbers([500, 1500, 1000, 2000]);
//# sourceMappingURL=index.js.map