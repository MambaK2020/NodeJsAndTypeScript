// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        private _isSuperAdmin: boolean = false
      ) {}

      public get isSuperAdmin(): boolean {
        return this._isSuperAdmin;
      }

      public promoteToSuperAdmin(): void {
        this._isSuperAdmin = true;
        console.log(`${this.name} now is super-admin.`);
      }

      public demoteToAdmin(): void {
        this._isSuperAdmin = false;
        console.log(`${this.name} now is admin.`);
      }
    }
  }
}
