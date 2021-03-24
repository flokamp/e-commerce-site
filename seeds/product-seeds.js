const { Product } = require('../models');

const productData = [
  {
    product_name: 'Coffee Table',
    price: 200.00,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Hammock',
    price: 140.00,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'Dresser',
    price: 175.00,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Ottoman',
    price: 85.00,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Counter Stools',
    price: 88.00,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
