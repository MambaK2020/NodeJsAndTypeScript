// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.
export var Finance;
(function (Finance) {
    class LoanCalculator {
        principal;
        annualRate;
        months;
        constructor(principal, annualRate, months) {
            this.principal = principal;
            this.annualRate = annualRate;
            this.months = months;
        }
        calculateMonthlyPayment() {
            const monthlyRate = this.annualRate / 12 / 100;
            // Формула для рассчета аннуитета
            return ((this.principal *
                (monthlyRate * Math.pow(1 + monthlyRate, this.months))) /
                (Math.pow(1 + monthlyRate, this.months) - 1));
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    // Класс, чтобы рассчитать налог на доход
    class TaxCalculator {
        income;
        taxRate;
        constructor(income, taxRate) {
            this.income = income;
            this.taxRate = taxRate;
        }
        calculateTax() {
            return (this.income * this.taxRate) / 100;
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (Finance = {}));
//# sourceMappingURL=finance.js.map