function Order () {
  this.pizzas = []
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.assignID = function() {
  this.currentID + 1;
  return this.currentID;
}

Order.prototype.TotalPrice = function() {
  var totalPrice=0
  this.pizzas.forEach(function() {
    totalPrice=totalPrice+this.price
  });
  return totalPrice;
};

function Pizza () {
  this.size=size;
  this.sauce=sauce;
  this.basicToppings=[];
  this.premiumToppings=[];
  this.price=price;
}

Pizza.prototype.TotalToppings = function() {
  var totalToppings=this.basicToppings.length() + this.premiumToppings.length()
  return totalToppings
}

Pizza.prototype.Price = function() {
   var price=0,  
   if (this.size="small") {
     price += 12;
     this.basicToppings.forEach(function() {
       price += 1
      });
      this.premiumToppings.forEach(function () {
        price =+ 2
      });
    }
    else if (this.size="medium") {
      price += 16;
      this.basicToppings.forEach(function() {
        price += 2
       });
       this.premiumToppings.forEach(function () {
         price =+ 3
       });
    }
    else if (this.size="large") {
      price += 22
      this.basicToppings.forEach(function() {
        price += 2
       });
       this.premiumToppings.forEach(function () {
         price =+ 3
       });
    }
    if (this.sauce="white") {
      price =+ 1.5
    }
    return price
  }

//UI 
  var userOrder = new Order();

  function displayOrder(orderToDisplay) {
    var orderItems = $("ul#orderItems");
    var htmlForPizza = "";
    orderToDisplay.pizzas.forEach(function(contact) {
      htmlForPizza += "<li id=" + pizza.id + ">" + pizza.size + " pizza with" + pizza.totalToppings + "toppings: $" + pizza.price + "</li>";
    });
    orderItems.html(htmlForPizza);
  };
 

