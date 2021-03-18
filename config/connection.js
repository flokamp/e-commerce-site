require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize("ecommerce_db", "root", "!d0ntk0w", {
			host: "localhost",
			dialect: "mysql",
			dialectOptions: {
				decimalNumbers: true,
			},
	  });

module.exports = sequelize;
