/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://shipping_mongo/sdcShipping',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDb Connected!'))
  .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;
