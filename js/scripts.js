function Order (ID) {
  this.pizzas = []
  this.ID = 0
}

Order.prototype.assignID = function() {
  this.ID += 1;
  return this.ID;
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
  pizza.ID=this.assignID();
}

Order.prototype.TotalPrice = function() {
  var totalPrice=0
  this.pizzas.forEach(function() {
    totalPrice=totalPrice+this.price
  });
  return totalPrice;
};

Order.prototype.FindPizza = function(ID) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].ID == ID) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Order.prototype.DeletePizza = function(ID) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].ID == ID) {
      delete this.contacts[i];
      return true;
      }
    }
  };
  return false;
}

Order.prototype.PizzaDetails = function(ID) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].ID == ID) {
        var toppings = pizza.basicToppings.toString() + pizza.premiumToppings.toString();
        $("#pizzaDetails").show()
        $("#pizzaSize").html(pizza.size);
        $("#pizzaSauce").html(pizza.sauce);
        $("#pizzaToppings").html(toppings);
        var buttons = $("#buttons");
        buttons.append("<button class='deleteButton' id=" + pizza.ID + ">Delete</button>");    
      }
    }   
  } 
}
  

function Pizza (size, sauce, basicToppings, premiumToppings) {
  this.size=size;
  this.sauce=sauce;
  this.basicToppings=basicToppings;
  this.premiumToppings=premiumToppings;
}

Pizza.prototype.Price = function() {
   var price=0;  
   if (this.size==="small") {
     price += 12;
     this.basicToppings.forEach(function() {
       price += 1
      });
      this.premiumToppings.forEach(function () {
        price += 2
      });
    }
    else if (this.size==="medium") {
      price += 16;
      this.basicToppings.forEach(function() {
        price += 2
       });
       this.premiumToppings.forEach(function () {
         price += 3
       });
    }
    else if (this.size==="large") {
      price += 22
      this.basicToppings.forEach(function() {
        price += 2
       });
       this.premiumToppings.forEach(function () {
         price += 3
       });
    }
    if (this.sauce==="white") {
      price += 1.50
    }
    return price
  }

//UI 
var userOrder = new Order();

function displayOrder(userOrder) {
  var orderItems = $("ul#orderItems");
  var orderTotal = $("h5#orderTotal");
  var htmlForPizza = "";
  var totalPrice = 0;
  var htmlForPrice = "";
  userOrder.pizzas.forEach(function(pizza) {
    htmlForPizza += "<li class= 'detailView'  id=" + pizza.id + ">" + pizza.size + " pizza with " + pizza.basicToppings.length + " basic topping(s) and " + pizza.premiumToppings.length + " premium topping(s): $"  + pizza.Price() + "</li>";
  });
  userOrder.pizzas.forEach(function(pizza) {
    totalPrice += pizza.Price();
  })
  htmlForPrice = "Your Total: $" + totalPrice;
  orderItems.html(htmlForPizza);
  orderTotal.html(htmlForPrice);
};


$(document).ready(function() {
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
    userOrder.assignID(myPizza);
    displayOrder(userOrder);
    $("#priceDisplay").show();

  $(".detailView").click(function(userOrder){
    userOrder.PizzaDetails(ID);
    $("#pizzaDetails").show();
    
  });

  $("#buttons").on("click", ".deleteButton", function(userOrder) {
    event.preventDefault();
    userOrder.DeletePizza(ID);
  });

  $("form#confirm").submit(function (event) {
    event.preventDefault();
    $("#thankYou").show();
  })  

   })
});
