'use strict';

require('@code-fellows/supergoose');

const Model = require('../models/mongo-model');
const model = new Model();

describe('CRUD functionality', () => {
  
  it('can create a record', async () => {
    let obj = { name: 'teacups', count: 12 };
    let createObj = await model.create(obj);
    Object.keys(obj).forEach(key => {
      expect(createObj[key]).toEqual(obj)[key]);
  });
});

  it('can get a record', async () => {
    let obj = { name: 'plates', count: 6 };
    let createObj = await model.create(obj);
    let fetchObj = await model.get(createObj._id);
    expect(fetchObj._id).toEqual(createObj._id);
  });

  