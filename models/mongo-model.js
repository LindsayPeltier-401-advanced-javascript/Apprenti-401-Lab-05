'use strict';

const schema = require('../schemas/category-schema');

/**
 * @class Model
 */
class Model {
  constructor() {
    this.schema = schema;
  }

  /**
   * @param {string} _id
   * @returns {object}
   */
  get(_id) {
    if (_id) {
      return this.schema.findOne({ _id });
    } else {
      return this.schema.findOne({});
    }
  }

  /**
   * @param {object} record
   * @returns {function}
   */
  create(record) {
    if (typeof record === 'object') {
      let newRecord = new this.schema(record);
      return newRecord.save();
    } else {
      return Error('Apologies, but the record is invalid.');
    }
  }

  /**
   * @param {string} _id
   * @param {object} record
   * @returns {function}
   */
  update(_id, record) {
    if (_id && record) {
      return this.schema.findByIdAndUpdate(_id, record, { new: true });
    } else {
      return 'undefined';
    }
  }

  /**
   * @param {string} _id
   * @returns {function}
   */
  delete(_id) {
    if (_id) {
      return this.schema.findByIdAndDelete(_id);
    } else {
      return 'I could not find this record.';
    }
  }
}

/**
 * @module Model
 */
module.exports = Model;
