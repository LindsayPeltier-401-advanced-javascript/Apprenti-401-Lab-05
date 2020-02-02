'use strict';

const mongoose = require('mongoose');
const Categories = require('./models/category-model');
const Products = require('./models/product-model');
require('dotenv').config();

//Connect------------------------------------/
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//Test--------------------------------------/
let categoriesTest = {
  name: 'test category',
  price: 10,
  quantity: 100
};

let productTest = {
  name: 'test product',
  quantity: 10
};

let categories = new Categories();
let products = new Products();

products
  .create(productTest)
  .then(response => console.log(response))
  .catch(error => console.log(error));

categories
  .create(categoriesTest)
  .then(response => console.log(response))
  .catch(error => console.log(error));
