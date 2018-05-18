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
  promptUser();
});

function displayProducts() {
  console.log("View our products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++){

	    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
    }
    connection.end();
  });
}

function promptUser(){
	var productID = 0;
	var 
	prompt("Give me the ID of the product you would like to buy", function(val) {
		var productID = val;
	}, function(err) {
		console.error("Sorry, I didn't get that " + err)
	}

	prompt("Give me the ID of the product you would like to buy", function(val) {
		var productID = val;
	}, function(err) {
		console.error("Sorry, I didn't get that " + err)
	}
}