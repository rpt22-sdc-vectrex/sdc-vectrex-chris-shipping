/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

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

module.exports = db;
