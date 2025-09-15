// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.

export namespace Finance {
  export class LoanCalculator {
    constructor(
      private principal: number,
      private annualRate: number,
      private months: number
    ) {}

    public calculateMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12 / 100;
      // Формула для рассчета аннуитета
      return (
        (this.principal *
          (monthlyRate * Math.pow(1 + monthlyRate, this.months))) /
        (Math.pow(1 + monthlyRate, this.months) - 1)
      );
    }
  }

  // Класс, чтобы рассчитать налог на доход
  export class TaxCalculator {
    constructor(
      private income: number,
      private taxRate: number
    ) {}

    public calculateTax(): number {
      return (this.income * this.taxRate) / 100;
    }
  }
}
