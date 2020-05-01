const chalk = require('chalk');
const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  const options = {
    uri: url,
    headers: {
      'x-ba-key': 'NTEzOTMzNmFhNjVjNDRjZjg5OTA1ODBiMTZhYzQ5NzQ',
    },
  };


  request(options, (error, response, body) => {
    let apiResponse;

    try {
      apiResponse = JSON.parse(body);
      return apiResponse;
    } catch (parseError) {
      console.log(chalk.red('Something went wrong in the API. Try in a few minutes'));

      return parseError;
    }

    console.log(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
  });
}

module.exports = convertBTC;
