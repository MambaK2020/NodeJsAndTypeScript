// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]): number =>{
    return numbers
    .filter((num)=> num % 2 === 0)
    .reduce((sum, num)=> sum + num, 0);

};

console.log(sumEvenNumbers([8, 20, 14, 23,45]));





// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
    (str: string): boolean;
}

const isEmpty: StringToBooleanFunction = (str) => {
    return str.length === 0
};

console.log(isEmpty(''));
console.log(isEmpty('test'))



// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

type CompareStrings = (name1: string, name2: string) => boolean;

const areStringsEqual: CompareStrings = (name1, name2) => {
    return name1 === name2;
};

console.log(areStringsEqual('John', 'John'));
console.log(areStringsEqual('Pink', 'Black'));


// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.


function getLastElement<T>(arr: T[]): T | undefined {
    return arr. length > 0 ? arr[arr.length - 1] : undefined;
}

console.log(getLastElement([8,19,23]));
console.log(getLastElement(['Mark', 'Bob', 'Liza']));
console.log(getLastElement([]));


// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a,b,c];
}

console.log(makeTriple(7,8,9));
console.log(makeTriple('Jack','Micha','Klauz'));
console.log(makeTriple(false,true,false));