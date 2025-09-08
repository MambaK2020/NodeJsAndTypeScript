// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

type Admin = {
    name: string;
    permissions: string[];
};

type User = {
    name: string;
    email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    name: 'Michal',
    permissions: ['read', 'write', 'delete'],
    email: 'michal@example.com',
};

console.log(adminUser);

// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.



type Car = {
    make: string;
    model: string;
    engine: {
        type: string;
        horsepower: number;
    };
    year?: number;
};

const myCar: Car= {
    make: 'Audi',
    model: 'A6',
    engine: {
        type: 'Diesel',
        horsepower: 185,
    },
    year: 2024,
};

function printCarInfo(car: Car): void {
    console.log(`Марка: ${car.make}, Модель: ${car.model}`);
    console.log(`Двигатель: ${car.engine.type}, Мощность: ${car.engine.horsepower}`);
    if (car.year) {
    console.log(`Год выпуска: ${car.year}`);
    }
}

printCarInfo(myCar)

// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface Product {
    name: string;
    price: number;
}

interface CalculateDiscount {
    (product: Product, discount: number) : number;
}

const CalculateDiscount: CalculateDiscount = (product, discount) => {
    return product.price - (product.price*discount) / 100
};

const product: Product = { name: 'Audi', price: 30000};
console.log(CalculateDiscount(product, 10));

// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface Employee {
    name: string;
    salary: number;
}

const employees: Employee[] = [
    {name: 'John', salary: 4000},
    {name: 'Anna', salary: 2000},
    {name: 'Bob', salary: 7000},
];

function getSalaries(employees: Employee[]):number[] {
    return employees.map((emp)=>emp.salary);
}

console.log(getSalaries(employees));


// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.

interface Person {
    firstName: string;
    lastName: string;
}

interface student extends Person {
    grade: number;

}

const student: Student = {
    firstName: 'Kobe',
    lastName: 'Bryant',
    grade:99,
};

function printStudentInfo(student: Student): void {
    console.log(`${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}

printStudentInfo(student);

// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.

interface concatStrings { (str1: string, str2: string): string;

}

const concatStrings: ConcatString = (str1,str2)=>{
    return str1+str2

};

console.log(concatStrings('Hello ', 'World!!!'))
