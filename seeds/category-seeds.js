const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Furniture',
  },
  {
    category_name: 'Outdoor',
  },
  {
    category_name: 'Storage',
  },
  {
    category_name: 'Bedding',
  },
  {
    category_name: 'Kitchen + Dining',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
