/* eslint-disable no-console */
const { Client } = require('pg');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const {
  PG_USER,
  PG_HOST,
  PG_PW,
  PG_PORT,
  PG_DB,
} = process.env;

const client = new Client({
  user: PG_USER,
  password: PG_PW,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB,
});

client.connect()
  .then(() => console.log('Successfully connected to PG_DB'))
  .catch((e) => console.log(e));
// .finally(() => client.end());
