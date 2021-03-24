const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize("ecommerce_db", "root", "!d0ntk0w", {
	host: "localhost",
	dialect: "mysql",
	dialectOptions: {
		decimalNumbers: true,
	},
});

module.exports = sequelize;
