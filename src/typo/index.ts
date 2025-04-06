interface Pizza {
  name: string;
  price: number;
}

type PizzaOrder = {
  id:number,
  pizza:Pizza,
  status:string
}

const menu: Pizza[] = [
   { name:"Margarida", price: 10 },
   { name:"Parmegiana", price: 20 },
   { name:"Strogonoff de frango", price: 50 }
 ];

let cashInRegister:number = 100;
let nextOrderId:number = 1;
let orderQueue: PizzaOrder[] = [];

function addNewPizza(pizza: Pizza): Pizza[] {
  menu.push(pizza);
  return menu;
}

function placeOrder(pizzaName: string) {
  let selectedPizza =  menu.find(pizzaObg => pizzaObg.name === pizzaName);

  if (!selectedPizza) {
  console.error(`&{pizzaName} does not exist in the menu`);
  return;
  }
  cashInRegister += selectedPizza.price;

  const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "Ordered" }
  orderQueue.push(newOrder);
  return newOrder
}

function completeOrder(orderId: number){
  let order = orderQueue.find(order => order.id === orderId);
  if(!order){
    console.error(`Order with id ${orderId} not found`);
    return;
  }
  order.status = "Completed";
  return order;
}

addNewPizza({ name: "Calabrasa", price: 100 });
addNewPizza({ name: "Churrasco", price: 200 });

placeOrder("Calabrasa");
completeOrder(1);
placeOrder("Strogonoff de frango");
completeOrder(2);

console.log("Menu: ", menu, "\n");
console.log("Cash in register: R$:", cashInRegister, "\n");
console.log("Order queue: ", orderQueue);