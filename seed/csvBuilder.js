/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const moment = require('moment');
const fs = require('fs');

const csvBuilder = async (amount) => {
  const start = moment().format('LTS');
  console.log({ start });
  const writer = csvWriter();
  const fileWrite = fs.createWriteStream('./mockData2.csv');
  writer.pipe(fileWrite);
  let mockShipping;
  const accepted = 'Accepted';
  const noReturns = 'No Returns';
  (async () => {
    for (let i = 1; i <= amount; i += 1) {
      mockShipping = {
        product_id: i,
        estimated_delivery: faker.date.future(),
        ready_to_ship: 'eu felis fusce',
        is_free_shipping: i % 2 !== 0,
        shipping_cost: faker.commerce.price(),
        ship_from_city: faker.address.city(),
        ship_from_state: faker.address.state(),
        returns: accepted ? i % 2 === 0 : noReturns,
        countries_shipped_to: faker.address.country(),
        return_policy: faker.lorem.sentence(),
      };
      if (!writer.write(mockShipping)) {
        await new Promise((resolve) => fileWrite.once('drain', resolve));
      }
    }
    writer.end();
  })();
};

csvBuilder(10000000);

exports.csvBuilder = csvBuilder;
