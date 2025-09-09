// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.
var sumEvenNumbers = function (numbers) {
    return numbers
        .filter(function (num) { return num % 2 === 0; })
        .reduce(function (sum, num) { return sum + num; }, 0);
};
console.log(sumEvenNumbers([8, 20, 14, 23, 45]));
var isEmpty = function (str) {
    return str.length === 0;
};
console.log(isEmpty(''));
console.log(isEmpty('test'));
var areStringsEqual = function (name1, name2) {
    return name1 === name2;
};
console.log(areStringsEqual('John', 'John'));
console.log(areStringsEqual('Pink', 'Black'));
// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.
function getLastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
console.log(getLastElement([8, 19, 23]));
console.log(getLastElement(['Mark', 'Bob', 'Liza']));
console.log(getLastElement([]));
// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.
function makeTriple(a, b, c) {
    return [a, b, c];
}
console.log(makeTriple(7, 8, 9));
console.log(makeTriple('Jack', 'Micha', 'Klauz'));
console.log(makeTriple(false, true, false));
