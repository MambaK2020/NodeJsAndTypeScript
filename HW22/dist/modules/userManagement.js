// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.
export var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            name;
            email;
            _isSuperAdmin;
            constructor(name, email, _isSuperAdmin = false) {
                this.name = name;
                this.email = email;
                this._isSuperAdmin = _isSuperAdmin;
            }
            get isSuperAdmin() {
                return this._isSuperAdmin;
            }
            promoteToSuperAdmin() {
                this._isSuperAdmin = true;
                console.log(`${this.name} now is super-admin.`);
            }
            demoteToAdmin() {
                this._isSuperAdmin = false;
                console.log(`${this.name} now is admin.`);
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
//# sourceMappingURL=userManagement.js.map