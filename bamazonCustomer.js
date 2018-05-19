var mysql = require("mysql");
var prompt = require('cli-prompt')

var connection = mysql.createConnection({
	host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "bamazon"

})

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayProducts();

});

function displayProducts() {
  console.log("View our products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++){
	    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
    }
    // connection.end();
  	promptUser();
  });

}

function promptUser(){
	var userItemID = 0;
	var userItemQTY = 0;
	prompt('Give me the item ID of an item you would like to buy ', function (val) {
	  userItemID = val;
  	
		prompt('Give me the quantity of item ' + userItemID + ' you would like to buy ', function (val) {
		  userItemQTY = val;

		  checkForItem(userItemQTY, userItemID);

		  }, function (err) {
		  console.error('unable to read first name: ' + err);
		});

	}, function (err) {
	  console.error('unable to read first name: ' + err);
	});

}

function checkForItem(itemQTY, itemID){
  connection.query("SELECT * FROM products WHERE item_id = " + itemID, function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    if (res[0].stock_quantity >= itemQTY){
    	console.log("User wants to buy " + itemQTY + " of item " + itemID);
	    console.log("Total for your transaction is " + (res[0].price * itemQTY));
	    completeTransaction(itemID, itemQTY, res[0].stock_quantity);
    } else {
    	console.log("Insufficient Quantity!  Only " + res[0].stock_quantity + " you want to buy " + itemQTY)
    }
    connection.end();
  });
}

function completeTransaction(itemID, itemQTY, totalQTY){
	console.log("Updating store quantity...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: totalQTY - itemQTY
      },
      {
        item_id: itemID
      }
    ],
    function(err, res) {
    	if (err) throw err;
    	else { 
    		// console.log(res[0].item_id + " products updated! New quantity " + res[0].stock_quantity);
    	}
    }
  );

  // console.log(query.sql);
}