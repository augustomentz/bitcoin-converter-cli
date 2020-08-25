import convertBTC from '../src/ConvertBTC';

const chai = require('chai');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('ConvertBTC', () => {
  it('Should return USD as currency and 1 as amount default', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
  });

  it('Should return USD as currency and 1 as amount default', () => {
    expect(convertBTC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });
});
