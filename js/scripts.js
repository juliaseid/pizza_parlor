function Order () {
  this.pizzas = []
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.assignID = function() {
  this.ID += 1;
  return this.ID;
}

Order.prototype.TotalPrice = function() {
  var totalPrice=0
  this.pizzas.forEach(function() {
    totalPrice=totalPrice+this.price
  });
  return totalPrice;
};

Order.prototype.FindPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].ID == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Order.prototype.DeletePizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].ID == id) {
      delete this.contacts[i];
      return true;
      }
    }
  };
  return false;
}

function Pizza (size, sauce, basicToppings, premiumToppings) {
  this.size=size;
  this.sauce=sauce;
  this.basicToppings=basicToppings;
  this.premiumToppings=premiumToppings;
}

Pizza.prototype.TotalToppings = function() {
  var totalToppings=this.basicToppings.length() + this.premiumToppings.length()
  return totalToppings
}

Pizza.prototype.Price = function() {
   var price=0;  
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
  orderToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.size + " pizza with" + pizza.totalToppings + "toppings: $" + pizza.price + "</li>";
  });
  orderItems.html(htmlForPizza);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete Item</button>");
};

function pizzaDetails() {
  var toppings = pizza.basicToppings.toStr() + pizza.premiumToppings.toStr();
  $("#pizzaDetails").show()
  $("#pizzaSize").html(pizza.size);
  $("#pizzaSauce").html(pizza.sauce);
  $("#pizzaToppings").html(toppings);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
}


function onClick () {
  $("li#orderItems").on("click", "li", function(){
    pizzaDetails(id)
  });
  $("#buttons").on("click", ".deleteButton", function() {
    Order.DeletePizza(this.id);
})
}

$(document).ready(function() {
  onClick();
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    inputSize = $("#size").val();
    inputSauce = $("#sauce").val();
    inputBasicToppings = [];
    $("input:checkbox[name=basicToppings]:checked").each(function(){
      inputBasicToppings.push($(this).val());
    });
    inputPremiumToppings = [];
    $("input:checkbox[name=premiumToppings]:checked").each(function(){
      inputPremiumToppings.push($(this).val());
    });
    var myPizza = new Pizza(inputSize, inputSauce, inputBasicToppings, inputPremiumToppings);
    userOrder.addPizza(myPizza);
    console.log(userOrder)
   })
});
