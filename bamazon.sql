DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NULL,
	department_name VARCHAR(45) NULL,
	price FLOAT NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Barukas Nuts", "Food", 10.70, 300), 
("AA Batteries 48 ct", "Electronics", 13.99, 600), 
("Bluetooth Headphones", "Electronics", 17.99, 50 ), 
("Brita replacement filters", "Home & Kitchen", 14.88, 200), 
("Dark Side of the Moon", "Music", 29.99, 55), 
("Mushroom Coffee", "Food", 11.57, 300), 
("Braggs Coconut Aminos", "Food", 6.67, 192), 
("M1 Electric Skateboard", "Electronics", 999.99, 20),
("Ceramic Knife", "Home & Kitchen", 12.90, 440),
("Collagen Cleansing Cream", "Health & Beauty", 121.60, 3),
("Facial Oil", "Health & Beauty", 55.00, 23);