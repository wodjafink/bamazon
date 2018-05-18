var mysql = require("mysql");

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

