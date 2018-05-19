# bamazon

Welcome to Bamazon products!  Here's how you use our simple CLI!

Starting our application is simple, just run 'node bamazonCustomer.js'.

You will be presented with a complete list of our products like so:

![Customer's first view](https://raw.githubusercontent.com/wodjafink/bamazon/master/Customer_1.png)
 
 You can see all of our products here!  Next step is to choose what you'd like.  Use the item_id to make that decision.  Then, enter the quantity.  If the product is in stock, you'll get an update telling you the total for the transaction!
 
![Customer's second view](https://raw.githubusercontent.com/wodjafink/bamazon/master/Customer_2.png)
 
 ADMINS read on!
 
 We have a super fancy MySQL database.  This is to show that transactions on the database are working.  Before the customer makes a purchase of 3 Brita Water Filters we can see a quantity of 200:
 
![Admin's first view](https://raw.githubusercontent.com/wodjafink/bamazon/master/MySQL_1.png)

The customer makes the transaction succesfully and this leads to an update in our stock quantity:

![Admin's first view](https://raw.githubusercontent.com/wodjafink/bamazon/master/MySQL_2.png)
