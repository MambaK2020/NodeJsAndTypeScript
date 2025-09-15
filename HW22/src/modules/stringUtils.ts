// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.

// Делаем первую букву строки заглавной
export function capitalize(str: string): string {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

// Переворачиваем строку задом наперед
export function reverseString(str: string): string {
  return str.split("").reverse().join(" ");
}
