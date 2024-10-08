
// const EventEmitter = require('events');
// const events = require("events");

/*const myEmitter = new EventEmitter;
myEmitter.on('great', ()=>{
    console.log('event create successful')
})

myEmitter.emit('great');



const newEmitter = new EventEmitter;
newEmitter.on('close', ()=>{
    console.log('event already closed')
})

newEmitter.emit('close')*/


// argument pass through event
/*
const myEmitter = new EventEmitter

myEmitter.on('event', (name, age)=>{
    console.log(`hello, ${name}, You are ${age} years old`)
})

myEmitter.emit('event', 'Monir', 34)*/


const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine')

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping)=>{
    console.log(`order Receive ${size} Pizza with ${topping}`)
    drinkMachine.serveDrink('large')
});

pizzaShop.order('Large', 'mushroom')
pizzaShop.displayOrder()




