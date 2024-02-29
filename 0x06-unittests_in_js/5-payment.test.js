// 5-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once for totalAmount = 100 and totalShipping = 20', function () {
    sendPaymentRequestToApi(100, 20);

    assert(consoleLogSpy.calledWith('The total is: 120'));

    assert.strictEqual(consoleLogSpy.callCount, 1);
  });

  it('should log the correct message and be called once for totalAmount = 10 and totalShipping = 10', function () {
    sendPaymentRequestToApi(10, 10);

    assert(consoleLogSpy.calledWith('The total is: 20'));

    assert.strictEqual(consoleLogSpy.callCount, 1);
  });
});

