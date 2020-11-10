/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
const faker = require('faker');
const JSONStream = require('JSONStream');
const moment = require('moment');
const fs = require('fs');

const objectBuilder = async (amount) => {
  const start = moment().format('LTS');
  console.log({ start });
  const transformStream = JSONStream.stringify(false);
  const fileWrite = fs.createWriteStream('./mockData1.json');
  transformStream.pipe(fileWrite);
  let mockShipping;
  const accepted = 'Accepted';
  const noReturns = 'No Returns';
  (async () => {
    for (let i = 0; i < amount; i += 1) {
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
      if (!transformStream.write(mockShipping)) {
        await new Promise((resolve) => fileWrite.once('drain', resolve));
      }
    }
    transformStream.end();
  })();
};

objectBuilder(10000000);

exports.objectBuilder = objectBuilder;
