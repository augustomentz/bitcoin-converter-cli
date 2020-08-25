"use strict";

var fetch = require('node-fetch');

var chalk = require('chalk');

var ora = require('ora');

var convertBTC = function convertBTC() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var url = "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(currency, "&amount=").concat(amount);
  var spinner = ora({
    text: 'Retrieving Bitcoin data',
    color: 'yellow'
  });
  fetch(url).then(function (data) {
    return data.json();
  }).then(function (data) {
    return console.log("".concat(chalk.red(amount), " BTC to ").concat(chalk.cyan(currency), " = ").concat(chalk.green(data.price)));
  })["catch"](function (err) {
    console.log(chalk.red('Something went wrong in the API. Try in a few minutes.'));
    return err;
  });
};

module.exports = convertBTC;