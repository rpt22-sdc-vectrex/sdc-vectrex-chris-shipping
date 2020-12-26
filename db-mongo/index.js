/* eslint-disable no-console */
const mongoose = require('mongoose');
const path = require('path');
const MongooseCache = require('mongoose-redis');

// const redisClient = require('redis').createClient;

// const redis = redisClient(6379, 'localhost');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

const REDIS_HOST = process.env.REDIS_HOST || '54.176.86.179';

const cache = MongooseCache(mongoose, `redis://${REDIS_HOST}:6379`);

const DB_CONNECTION = process.env.DB_CONNECTION
  || 'mongodb://54.176.111.22/sdcShipping';

mongoose
  .connect(
    DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  )
  .then(() => console.log('MongoDb Connected!'))
  .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = {
  db,
  cache,
};
