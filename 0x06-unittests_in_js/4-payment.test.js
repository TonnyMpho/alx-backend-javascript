// 4-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with the correct arguments and log the result', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledWith('SUM', 100, 20));

    assert(consoleLogSpy.calledWith('The total is: 10'));

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
