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

const schemaName = 'shipping';

const pgSchemas = [];

const schemaCodes = {
  25007: 'schema_and_data_statement_mixing_not_supported',
  '3F000': 'invalid_schema_name',
  '42P06': 'duplicate_schema',
  '42P15': 'invalid_schema_definition',
  42000: 'syntax_error_or_access_rule_violation',
  42601: 'syntax_error',
};

const schemaFunction = async () => {
  const selectSchemaSql = 'SELECT schema_name FROM information_schema.schemata';
  await client.query(selectSchemaSql, (err, res) => {
    console.log('\nselectSchemaSql: ', selectSchemaSql);
    if (err) {
      console.log('SELECT schema_name: ', err);
    } else if (res.rows !== undefined) {
      res.rows.forEach((row) => {
        pgSchemas.push(row.schema_name);
      });
      console.log('schema names: ', pgSchemas);
      console.log('SELECT schema_name total schemas: ', res.rowCount);
    }
  });
  const createSql = `CREATE SCHEMA IF NOT EXISTS
  ${schemaName} AUTHORIZATION ${PG_USER};`;
  console.log('\ncreateSql: ', createSql);
  client.query(createSql, (createErr, createRes) => {
    if (createErr) {
      console.log('CREATE SCHEMA ERROR: ', createErr);
    }
    if (createRes) {
      const createTableSql = `CREATE TABLE ${schemaName}.shipping_table(
        product_id INT primary key,
        estimated_delivery TEXT,
        ready_to_ship TEXT,
        is_free_shipping TEXT,
        shipping_cost TEXT,
        ship_from_city TEXT,
        ship_from_state TEXT,
        returns TEXT,
        countries_shipped_to TEXT,
        return_policy TEXT
      );`;
      console.log('\ncreateTableSql: ', createTableSql);
      client.query(createTableSql, (tableErr, tableRes) => {
        if (tableErr) {
          console.log('CREATE TABLE ERROR: ', tableErr.code, '--', schemaCodes[tableErr.code]);
          console.log('createTableSql: ', tableErr);
        }
        if (tableRes) {
          console.log('\nCREATE TABLE RESULT: ', tableRes);
        }
      });
    }
  });
};

client.connect()
  .then(() => console.log('Successfully connected to PG_DB'))
  .then(schemaFunction())
  .catch((e) => console.log(e));
