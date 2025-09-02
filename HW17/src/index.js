// Task1
function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    var discounted = total - (total * discount) / 100;
    return discounted;
}
console.log(calculateTotal(100, 8));
console.log(calculateTotal(100, 5, 2));
//Task2
var id;
function displayId(id) {
    if (typeof id === 'string') {
        console.log("ID: ".concat(id.toUpperCase()));
    }
    else {
        console.log("ID: ".concat(id * 10));
    }
}
id = 'ugvnhnndnsvxavanbx';
displayId(id);
var orders = [
    { orderId: '1', amount: 150, status: 'pending' },
    { orderId: '2', amount: 250, status: 'shipped' },
    { orderId: '3', amount: 400, status: 'delivered' },
    { orderId: '4', amount: 800, status: 'pending' },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
console.log(filterOrdersByStatus(orders, 'pending'));
var ProductInfo = ['Lemon', 15, 5];
function updateStock(inventory, product) {
    var name = product[0], price = product[1], quantity = product[2];
    if (inventory[name]) {
        inventory[name] += quantity;
    }
    else {
        inventory[name] = quantity;
    }
    return inventory;
}
var inventory = {
    Lemon: 10,
    Apple: 8,
};
console.log(updateStock(inventory, productInfo));
