// api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
  after(function () {
    app.close();
  });
});

describe('Cart page', function () {
  it('Correct status code when :id is a number?', function (done) {
    request('http://localhost:7865/cart/123', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number?', function (done) {
    request('http://localhost:7865/cart/123', function (error, response, body) {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', function (done) {
    request('http://localhost:7865/cart/notanumber', function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Other tests for the cart page?', function (done) {
    done();
  });
});
