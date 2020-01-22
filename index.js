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
  .then(res => console.log(res))
  .catch(err => console.log(err));

categories
  .create(categoriesTest)
  .then(res => console.log(res))
  .catch(err => console.log(err));
