# _Athena's Pizza_ #

#### _A Basic Function Order Website for a Pizzeria using OOD_

#### By _**Julia Seidman**_

## Description

_This program is a website that allows users to create a pizza according to their preferences of size and toppings, returning a price for that order._

_Specifications:_
* By default, when a user begins to customize a pizza order, the pizza will be set to a large cheese pizza with red sauce.

* A price will not display until the user clicks "Confirm Order"

* A user must select size first.  There are 3 sizes, each with a base price.

* The user may substitute an olive oil or white sauce base.  Olive oil does not change the price; white sauce has an upcharge.

* Then a user may select toppings.  The cost for toppings is based on category (basic and premium) and the size of the pizza selected.

* Once a user has made selections, they press the "Add to Order" button.  This will open an order display with "Your Order" and "Your Total", as well as a "Confirm Order" button.

* A user may add multiple pizzas to an order, and each will display as a separate list item, including individual cost.  The total price will update with each addition.


## Setup/Installation Requirements

* _Open the page in a web browser._


## Known Bugs

* _The detail display and delete pizza functionality are not working because of a problem with the IDs.  In order to treat each pizza separately for a detail view and deletion, those functions must be associated with the order and the pizza's ID within that order, and that pathway is not working correctly, so no detail view or deletion function is available._

* _There is no actual email functionality to the page._

* _The sauce, size, and topping selectors do not reset after a pizza is added to the order, so by default, the second pizza will be the same as the first._

## Support and contact details

_Contact Julia Seidman at juliaseid@gmail.com for support or questions._

### License

Copyright (c) 2020 **_Julia Seidman** under MIT copyright



Object Pizza:
Properties - size, sauce, toppings
Methods - price

Object Order: 
properties - pizzas