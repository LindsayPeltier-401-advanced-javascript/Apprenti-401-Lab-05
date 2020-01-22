'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({
  name: { type: 'string', required: true },
  price: { type: 'number', required: true },
  quantity_in_stock: { type: 'number', required: true }
});

/**
 * @function
 * @returns console.log()
 */
categories.post('findOne', function() {
  console.log('Record found, returning data');
});

/**
 * @function
 * @returns console.log()
 */
categories.post('find', function() {
  console.log('Record not found');
});

/**
 * @function
 * @returns console.log()
 */
categories.post('save', function() {
  console.log('Record saved to database');
});

/**
 * @module categories categories mongoose schema
 */

module.exports = mongoose.model('categories', categories);
