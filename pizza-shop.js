const EventEmitter = require('events');

class PizzaShop extends EventEmitter{

    constructor() {
        super()
        this.orderNumber = 0
    }

    order=(size, topping)=>{
        this.orderNumber++
        this.emit('order', size, topping)
    }

    displayOrder=()=>{
        console.log(`Current order: ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;