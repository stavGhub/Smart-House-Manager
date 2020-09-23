import { Product } from './Product'


var assert = require('assert');

describe('Product', function () {
  describe('construction tests', function () {
    it('state initialized to false by default', function () {
      let p = new Product(1, "foo", false, 1.3);
      assert.equal(p.getState(), false);
      assert.equal(p.getName(), "foo");
      assert.equal(p.getRunTime(), 1.3);
    });
  });
  describe('turnOn tests', function () {
    it('state should change to true', function () {
      let p = new Product(1, "foo", false, 1.3);
      p.turnOn();
      assert.equal(p.getState(), true);
    });
  });
  describe('turnOff tests', function () {
    it('state should change to false', function () {
      let p = new Product(1, "foo", true, 1.3) ;
      p.turnOff();
      assert.equal(p.getState(), false);
    });
  });
});