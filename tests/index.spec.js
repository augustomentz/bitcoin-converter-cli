const { expect } = require('chai');
const { describe, it } = require('mocha');

const { exec } = require('child_process');

const pkg = require('../package.json');

const btcConverter = './src/index.js';

describe('Bitcoin Converter CLI', () => {
  it('Should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('Should return the description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.includes(pkg.description)).to.be.true;
      done();
    });
  });

  it('Should return the currency option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('Should return the amount option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
