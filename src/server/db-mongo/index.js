/* eslint-disable no-undef */
/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose
  .connect(
    DB_URL,
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
