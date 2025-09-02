// Task1

function calculateTotal(
    price: number,
    quantity: number,
    discount: number = 0
): number {
    const total = price * quantity;
    const discounted = total - (total * discount) / 100;
    return discounted;
}

console.log(calculateTotal(100, 8));
console.log(calculateTotal(100,5,2));

//Task2

let id: string | number;

function displayId(id: string | number):void {
    if(typeof id === 'string') {
        console.log(`ID: ${id.toUpperCase()}`);
    }else {
        console.log(`ID: ${id * 10}`);
    }
}

id = 'ugvnhnndnsvxavanbx';
displayId(id);

//Task3

type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
    orderId:string;
    amount: number;
    status: OrderStatus;
}

const orders: Order[] = [
    {orderId: '1', amount: 150, status: 'pending'},
    {orderId: '2', amount: 250, status: 'shipped'},
    {orderId: '3', amount: 400, status: 'delivered'},
    {orderId: '4', amount: 800, status: 'pending'},
]

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
    return orders.filter((order) => order.status === status);
  }

  console.log(filterOrdersByStatus(orders, 'pending'));

  // Task4

  type ProductInfo = [string, number, number];

  const ProductInfo: ProductInfo = ['Lemon', 15, 5];

  type Inventory = {
    [key:string]:number;
  };

  function updateStock(inventory: Inventory, product: ProductInfo): Inventory {
    const [name, price, quantity] = product;
    if (inventory[name]) {
      inventory[name] += quantity;
    } else {
      inventory[name] = quantity;
    }
    return inventory;
  }
  
  let inventory: Inventory = {
    Lemon: 10,
    Apple: 8,
  };
  
  console.log(updateStock(inventory, ProductInfo));