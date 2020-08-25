const fetch = require('node-fetch');
const chalk = require('chalk');
const ora = require('ora');

const convertBTC = (currency = 'USD', amount = 1) => {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  const spinner = ora({
    text: 'Retrieving Bitcoin data',
    color: 'yellow'
  });

  spinner.start();

  return fetch(url)
    .then((data) => {
      spinner.stop();

      return data.json();
    })
    .then((data) => {
      console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.green(data.price)}`);
    })
    .catch((err) => {
      spinner.stop();

      console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'));

      return err;
    });
};

module.exports = convertBTC;
