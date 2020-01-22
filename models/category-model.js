'use strict';

const mongoModel = require('../models/mongo-model');
const schema = require('../schema/category-schema');
/**
 * @class Categories
 * @extends {mongoModel}
 */
class Categories extends mongoModel {
  constructor() {
    super(schema);
  }
}
/**
 * @module Categories
 */
module.exports = Categories;
