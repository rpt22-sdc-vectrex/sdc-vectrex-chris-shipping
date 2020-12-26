/* eslint-disable no-undef */
const mongoose = require('mongoose');
const redis = require('redis');
const dotenv = require('dotenv');
const path = require('path');
const util = require('util');

dotenv.config(path.join(__dirname, './.env'));

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000,
});

client.get = util.promisify(client.get);
const { exec } = mongoose.Query.prototype;

mongoose.Query.prototype.cache = function (options = { time: 60 }) {
  this.useCache = true;
  this.time = options.time;
  this.hashKey = JSON.stringify(options.key || this.mongooseCollection.name);
  return this;
};

mongoose.Query.prototype.exec = async function () {
  const key = JSON.stringify({
    ...this.getFilter(),
  });

  const cacheValue = await client.get(key);
  if (cacheValue) {
    console.log('Response from Redis');
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map((d) => new this.Model(d))
      : new this.Model(doc);
  }
  const result = await exec.apply(this, arguments);
  console.log(this.time);
  client.hset(this.hashKey, key, JSON.stringify(result));
  client.expire(this.hashKey, this.time);
  console.log('Response from MongoDB');
  return result;
};

module.exports = {
  clearKey(hashKey) {
    client.del(JSON.stringify(hashKey));
  },
};
