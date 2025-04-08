let nextPizzaId: number = 1;
let cashInRegister:number = 100;

interface Pizza {
  id: number
  name: string;
  price: number;
}

type Order = {
  id: Pizza["id"],
  pizza: Pizza,
  status: "Ordered!" | "In Progress..." | "Completed!" | "Cancelled!"
}

type Details = {
  id: Pizza["id"],
  name: Pizza["name"],
  price: Pizza["price"],
  status: Order["status"],
}

let orderHistory: Order[] = [];
let details: Details[] = [];

let menu: Pizza[] = [
   { id: nextPizzaId++, name: "Calabresa", price: 30 },
   { id: nextPizzaId++, name: "Frango com Catupiry", price: 40 },
   { id: nextPizzaId++, name: "Portuguesa", price: 50 },
   { id: nextPizzaId++, name: "Quatro Queijos", price: 60 },
   { id: nextPizzaId++, name: "Marguerita", price: 70 },
   { id: nextPizzaId++, name: "Margarida", price: 10 },
   { id: nextPizzaId++, name: "Parmegiana", price: 20 },
   { id: nextPizzaId++, name: "Strogonoff de frango", price: 50 }
 ];

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
   const newPizza:Pizza = {
       id: nextPizzaId++,
       ...pizza,
     }
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | void {  
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);

  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }

  const existingOrder = orderHistory.find(order => order.pizza.name === pizzaName && order.status !== "Cancelled!");
  if (existingOrder) {
    console.error(`${pizzaName} is already in the order queue`);
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = { id: selectedPizza.id, pizza: selectedPizza, status: "Ordered!" };
  orderHistory.push(newOrder);
  return newOrder;
}

function processOrder(pizzaName: string): Order | void {
  const order = orderHistory.find(order => order.status === "Ordered!" && order.pizza.name === pizzaName);
  if (!order) {
    console.error(`${pizzaName} was not found in the order queue`);
    return;
  }
  order.status = "In Progress...";
  return order;
}

function cancelOrder(orderId: number): Order {
  const order = orderHistory.find(order => order.id === orderId);
  if (!order) { 
    console.error(`${orderId} was not found in the order queue`);
    throw new Error();
  }
  order.status = "Cancelled!";
  return order;
}

function completeOrder(orderId: number): Order{
  const order = orderHistory.find(order => order.id === orderId);
  if(!order){
   console.error(`${orderId} was not found in the order queue`);
   throw new Error();
  }
  order.status = "Completed!";
  return order;
}

function getPizzaDetails(identifier: number | string): Details[] {
  const pizza = menu.find(pizza => pizza.id === identifier || pizza.name === identifier);
  const order = orderHistory.find(order => order.id === identifier || order.pizza.name === identifier);

  if (!pizza) {
     console.error(`${identifier} was not found in the menu`);
     throw new Error();
  }

  if (!order) {
     console.error(`${identifier} was not found in the order queue`);
     throw new Error();
  }

  let newDetails: Details = { 
     id: pizza.id,
     name: pizza.name,
     price: pizza.price,
     status: order.status
 };
  
  details.push(newDetails);
  return details;
}

addNewPizza({ name: "Calabrasa", price: 100.00 });
addNewPizza({ name: "Churrasco", price: 200.00 });

//setOrder
placeOrder("Strogonoff de frango");
placeOrder("Quatro Queijos");
placeOrder("Churrasco");
placeOrder("Calabresa");
placeOrder("Portuguesa");

//processOrder
processOrder("Strogonoff de frango");

//completeOrder
completeOrder(4);

//cancelOrder
cancelOrder(10);

//PizzaDetails
getPizzaDetails(8)
getPizzaDetails(4);
getPizzaDetails(10);

console.log("Menu: ", menu, "\n");
console.log("Cash in register: R$:", cashInRegister, "\n");
console.log("Order History: ", orderHistory, "\n");
console.log("Pizza details: ", details, "\n");