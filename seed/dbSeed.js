/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
// const moment = require('moment');
const through2 = require('through2');
const ndjson = require('ndjson');
const Shipping = require('../db-mongo/models/shipping');
const db = require('../db-mongo/index');

// dotenv.config({ path: path.join(__dirname, '../.env') });

// const start = moment().format('LTS');
// console.log({ start });

const closeConnection = () => {
  mongoose.disconnect();
  console.log('DB Connection closed!');
};
// create our readStream
const readStream = fs.createReadStream(
  ('seed/mockData3.json'),
);
// pipe our readStream through ;) our through2 wrapper which is based off node's
// stream.Transform class and allows us to create a stream much more easily
const doStream = readStream.pipe(
  through2(
    function handleWrite(chunk, encoding, done) {
      this.push(chunk, encoding);
      done();
    },
  ),
);
// further piping our stream through ndjson parse npm package, which parses
// new-line-delimited json files
const transformStream = doStream.pipe(
  ndjson.parse(),
);
/* our batchingStream below is going to take our data
  and cut it into bite size chunks, pass them to our transformStream(ndjson
  parser), before it's piped into our databaseStream
*/
const batchingStream = ((source) => {
  // set batchSize accordingly to what your cpu can handle
  const batchSize = 10000;
  let batchBuffer = [];
  // eslint-disable-next-line no-shadow
  const batchingStream = source.pipe(
    through2.obj(
      // eslint-disable-next-line prefer-arrow-callback
      function handleWrite(item, encoding, done) {
        // push our item to our buffer ONLY if less than our batch size
        batchBuffer.push(item);
        if (batchBuffer.length >= batchSize) {
          /* once our batchBuffer array exceeds our explicit batchSize
            push our collected batch (batchBuffer) to our source
            (transformStream) for parsing
          */
          this.push(batchBuffer);
          // reset/empty our batchBuffer array
          batchBuffer = [];
        }
        done();
      },
      function handleFlush(done) {
        /* if we have any leftover objects that are won't make it to our batchSize
          push the remaining objects in our batchBuffer to our source (transformStream)
        */
        if (batchBuffer.length) {
          this.push(batchBuffer);
        }
        done();
      },
    ),
  );
  return (batchingStream);
})(transformStream);
/* this is where the magic happens
  pipe our batchStream through our dataBase stream and via promises baked into
  mongoDB, wait until batch is finished before continuing
*/
const databaseStream = batchingStream.pipe(
  through2(
    {
      objectMode: true,
    },
    (batch, encoding, done) => {
      const options = {
        ordered: true,
        lean: true,
      };
      const promises = batch.map(
        // DB insertion via insertMany()
        (item) => (Shipping.insertMany(item, options)),
      );
      // Promisify our promise function (insertMany() via mongoose ORM) and act on it's result
      Promise
        .all(promises)
        .then(
          (results) => {
            done(null, results);
          },
          (error) => {
            done(error);
          },
        );
    },
  ),
);
// this turns on our faucet so to speak
databaseStream.on('data', () => {
  console.log('batch completed');
});
// and once our water runs out
databaseStream.on('end', () => {
  closeConnection();
  // const end = moment().format('LTS');
  console.log('Done Seeding!');
});
