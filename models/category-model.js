'use strict';

const mongoModel = require('../models/mongo-model');
const schema = require('../schema/category-schema');
/**
 * @class Categories
 * @extends {dataModel}
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
