const redis = require('redis');
const { promisify } = require('util');

const {
  databases: {
    redis: { host, port }
  }
} = require('../config/awsconfig');

const client = redis.createClient({
  host, port
});

client.on('connect', () => console.log('Redis connected!'));

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client)
};
