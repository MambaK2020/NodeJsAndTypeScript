// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.makeSound()));

// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  constructor(
    public radius: number,
    public color: string
  ) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new ColoredCircle(5, "Red");
console.log(`Circle area: ${circle.calculateArea()}, Color: ${circle.color}`);

const rectangle = new ColoredRectangle(4, 6, "Blue");
console.log(
  `Rectangle area: ${rectangle.calculateArea()}, Color: ${rectangle.color}`
);

//   Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing Machine is now ON");
  }
  turnOff(): void {
    console.log("Washing Machine is now OFF");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON");
  }
  turnOff(): void {
    console.log("Refrigerator is now OFF");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach((app) => {
  app.turnOn();
  app.turnOff();
});

//   Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds in Savings Account");
    }
  }

  addInterest(): void {
    this.balance += this.balance * this.interestRate;
  }
}

class CheckingAccount extends Account {
  private fee: number;

  constructor(initialBalance: number, fee: number) {
    super(initialBalance);
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
    } else {
      console.log("Insufficient funds in Checking Account");
    }
  }
}

const savings = new SavingsAccount(5000, 0.02);
savings.deposit(840);
savings.addInterest();
console.log(`Savings Account balance: ${savings.getBalance()}`);

const checking = new CheckingAccount(500, 2);
checking.withdraw(100);
console.log(`Checking Account balance: ${checking.getBalance()}`);

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
    abstract play(): void;
  }
  
  class Audio extends Media {
    play(): void {
      console.log('Playing audio');
    }
  }
  
  class Video extends Media {
    play(): void {
      console.log('Playing video');
    }
  }
  
  const mediaList: Media[] = [new Audio(), new Video()];
  mediaList.forEach((media) => media.play());