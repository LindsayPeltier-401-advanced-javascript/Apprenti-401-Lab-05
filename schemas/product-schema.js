'use strict';

const mongoose = require('mongoose');

const products = new mongoose.Schema({
  name: { type: 'string', required: true },
  quantity: { type: 'number', required: true }
});

/**
 * @function
 * @returns console.log()
 */
products.post('findOne', function() {
  console.log('Record found, returning data');
});

/**
 * @function
 * @returns console.log()
 */
products.post('find', function() {
  console.log('Record not found');
});

/**
 * @function
 * @returns console.log()
 */
products.post('save', function() {
  console.log('Record saved to database');
});

/**
 * @module products products mongoose schema
 */

module.exports = mongoose.model('products', products);
