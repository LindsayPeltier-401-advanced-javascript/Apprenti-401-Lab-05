'use strict';

const mongoModel = require('../models/mongo-model');
const schema = require('../schema/product-schema');
/**
 * @class Products
 * @extends {mongoModel}
 */
class Products extends mongoModel {
  constructor() {
    super(schema);
  }
}
/**
 * @module Products
 */
module.exports = Products;
