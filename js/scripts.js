function Order () {
  this.pizzas = []
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.totalPrice = function() {
  var totalPrice=0
  this.pizzas.forEach(pizza) {
    totalPrice=totalPrice+this.price
  }
  return totalPrice
}